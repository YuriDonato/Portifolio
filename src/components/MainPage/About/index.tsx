import { useLanguage } from '../../../data/Language'
import { translations } from '../../../data/Language/translations'
import { CiCircleChevDown } from 'react-icons/ci'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Spinner } from '@chakra-ui/react'
import * as S from './styles'
// import Spline from '@splinetool/react-spline'
import { BounceBall } from './BounceBall'
import { useState } from 'react'
import React, { Suspense } from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

const About = () => {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)

  const Loader = (splineApp: any) => {
    setIsSplineLoaded(true)
  }

  return (
    <S.SectionContainer ref={ref}>
      <S.MainContainer>
        <S.LeftSideContainer>
          <Suspense
            fallback={
              <Spinner
                thickness="4px"
                speed="0.65s"
                // emptyColor="gray.200"
                color="green.500"
                size="xl"
                margin={'50%'}
              />
            }
          >
            <Spline
              style={{ height: '20rem' }}
              scene="https://prod.spline.design/6A1x6gndgX3eYe1L/scene.splinecode"
            />
          </Suspense>
        </S.LeftSideContainer>
        <S.RightSideContainer>
          <S.LineContainer>
            <S.Dot />
            <S.Line />
          </S.LineContainer>
          <S.TextContainer style={{ overflow: 'hidden' }}>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 20 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <S.Title>
                {translations[language].about.title}
                <S.NameTitle>Yuri</S.NameTitle>
              </S.Title>
              <S.Description>
                {translations[language].about.description}
              </S.Description>
            </motion.div>
          </S.TextContainer>
        </S.RightSideContainer>
      </S.MainContainer>
      <div style={{ marginTop: '5rem' }}>
        {/* <CiCircleChevDown color="white" size={'2.5rem'} /> */}
        {/* <BounceBall /> */}
      </div>
    </S.SectionContainer>
  )
}

export default About
