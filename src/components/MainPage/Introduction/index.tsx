import { useLanguage } from '../../../data/Language'
import { translations } from '../../../data/Language/translations'

import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'

const Introduction = () => {
  const { language } = useLanguage()
  const techs = [
    'ReactJS',
    'Lua',
    'JavaScript',
    'Typescript',
    'C#',
    'Git',
    'Django',
    'Firebase'
  ]

  const MotionBox = motion(Box)
  const cardBg = useColorModeValue('rgb(28, 69, 46)', 'rgba(26, 32, 44, 0.7)')
  const cardBorder = useColorModeValue(
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.1)'
  )

  const [ref, inView] = useInView({
    triggerOnce: true
  })

  return (
    <S.SectionContainer ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 20 : -10 }}
        transition={{ duration: 0.8 }}
      >
        <S.Header>{translations[language].introduction.header}</S.Header>
        <S.Title>{translations[language].introduction.title}</S.Title>
        <S.Description>
          {translations[language].introduction.description}
        </S.Description>
      </motion.div>
      <div>
        <SimpleGrid columns={[1, null, 3]} spacing={10} p={5}>
          {techs.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
              transition={{ duration: 0.8 }}
              key={index}
            >
              <MotionBox
                bg={cardBg}
                border={`1px solid ${cardBorder}`}
                backdropFilter="blur(10px)"
                borderRadius="15px"
                p={5}
                shadow="lg"
                cursor="pointer"
                // whileHover={{
                //   scale: 1.05,
                //   rotate: 0.5,
                //   transition: { duration: 0.2 }
                // }}
                _hover={{ boxShadow: 'xl' }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
                  transition={{ duration: 0.8 }}
                  key={index}
                >
                  <Text fontSize="xl" fontWeight="bold" color="white">
                    {item}
                  </Text>
                </motion.div>
              </MotionBox>
            </motion.div>
          ))}
        </SimpleGrid>
      </div>
    </S.SectionContainer>
  )
}

export default Introduction
