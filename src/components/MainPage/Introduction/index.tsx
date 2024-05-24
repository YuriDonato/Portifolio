import { useLanguage } from '../../../data/Language'
import { translations } from '../../../data/Language/translations'

import {
  Box,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'
import { techs } from '../../../data/Techs'

const Introduction = () => {
  const { language } = useLanguage()

  const MotionBox = motion(Box)
  const cardBg = useColorModeValue('rgb(28, 69, 46)', 'rgba(26, 32, 44, 0.7)')
  const cardBorder = useColorModeValue(
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.1)'
  )

  const isMobile = useBreakpointValue({ base: true, md: false })

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
        <SimpleGrid columns={[2, null, 5]} spacing={10} p={5}>
          {Object.values(techs).map((item, index) => (
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
                _hover={{ boxShadow: 'xl' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <img
                  style={{ width: `${isMobile ? '8%' : '50%'}` }}
                  src={item.img}
                  alt={item.name}
                />
                <Text
                  style={{ marginTop: '1rem' }}
                  fontSize="xl"
                  fontWeight="bold"
                  color="white"
                >
                  {item.name}
                </Text>
              </MotionBox>
            </motion.div>
          ))}
        </SimpleGrid>
      </div>
    </S.SectionContainer>
  )
}

export default Introduction
