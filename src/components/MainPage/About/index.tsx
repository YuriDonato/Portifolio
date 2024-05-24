import { useLanguage } from '../../../data/Language'
import { translations } from '../../../data/Language/translations'
import { CiCircleChevDown } from 'react-icons/ci'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'
import Spline from '@splinetool/react-spline'
import { BounceBall } from './BounceBall'

const About = () => {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  return (
    <S.SectionContainer ref={ref}>
      <S.MainContainer>
        <S.LeftSideContainer>
          <Spline
            style={{ height: '20rem' }}
            scene="https://prod.spline.design/6A1x6gndgX3eYe1L/scene.splinecode"
          />
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
        <BounceBall />
      </div>
    </S.SectionContainer>
  )
}

export default About
