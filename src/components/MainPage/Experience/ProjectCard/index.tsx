import React from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  Tag,
  Button,
  VStack,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'

import * as S from './styles'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../../../../data/Language'
import { translations } from '../../../../data/Language/translations'

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string[]
  technologies: string[]
  repoLink: string
  demoLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  technologies,
  repoLink,
  demoLink
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  const { language } = useLanguage()

  return (
    <S.CardContainer ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
        transition={{ duration: 0.8 }}
      >
        <VStack spacing={4} align="start">
          <S.Title>{title}</S.Title>
          <S.WorkType>{subtitle}</S.WorkType>
          <S.DescriptionContainer>
            {description.map((point, index) => (
              <S.Description key={index}>&#8226; {point}</S.Description>
            ))}
          </S.DescriptionContainer>
          <S.TechContainer>
            {technologies.map((tech, index) => (
              <S.Tech key={index}>{tech}</S.Tech>
            ))}
          </S.TechContainer>
          {repoLink.length >= 2 && demoLink.length >= 2 ? (
            <S.ButtonContainer>
              <S.Button as="a" href={repoLink}>
                {translations[language].experience.button1}
                <S.ButtonTextContainer>
                  <S.ButtonText>
                    {translations[language].experience.buttonHover}
                  </S.ButtonText>
                </S.ButtonTextContainer>
              </S.Button>
              <S.Button as="a" href={demoLink}>
                {translations[language].experience.button2}
                <S.ButtonTextContainer>
                  <S.ButtonText>
                    {translations[language].experience.buttonHover}
                  </S.ButtonText>
                </S.ButtonTextContainer>
              </S.Button>
            </S.ButtonContainer>
          ) : (
            <S.ButtonContainer>
              <S.Button>{translations[language].experience.button3}</S.Button>
            </S.ButtonContainer>
          )}
        </VStack>
      </motion.div>
    </S.CardContainer>
  )
}

export default ProjectCard
