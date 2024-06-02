import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import { useLanguage } from '../../../data/Language'
import { translations } from '../../../data/Language/translations'
import ProjectCard from './ProjectCard'
import * as S from './styles'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ProjectsTranslation } from '../../../data/Language/projectsTranslation'

// Definindo o tipo para os projetos
type ProjectType = {
  title: string
  subtitle: string
  description: string[]
  technologies: string[]
  repoLink: string
  demoLink: string
}

// Definindo o tipo para a tradução dos projetos
type ProjectsTranslationType = {
  eng: Record<string, ProjectType>
  ptbr: Record<string, ProjectType>
}

const Experience = () => {
  const { language } = useLanguage()
  const isMobile = useBreakpointValue({ base: true, md: false })

  // Garantir que ProjectsTranslation seja do tipo correto
  const projectList: Record<string, ProjectType> =
    ProjectsTranslation[language as keyof ProjectsTranslationType]
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  return (
    <S.SectionContainer ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
        transition={{ duration: 0.8 }}
      >
        <S.smallTitle>{translations[language].experience.header}</S.smallTitle>
        <S.Title>{translations[language].experience.title}</S.Title>
      </motion.div>
      {isMobile ? (
        <S.ProjectContainer>
          {Object.keys(projectList).map((key, index) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
              transition={{ duration: 0.8 }}
              key={index}
            >
              <ProjectCard
                key={index}
                title={projectList[key].title}
                subtitle={projectList[key].subtitle}
                description={projectList[key].description}
                technologies={projectList[key].technologies}
                repoLink={projectList[key].repoLink}
                demoLink={projectList[key].demoLink}
              />
            </motion.div>
          ))}
        </S.ProjectContainer>
      ) : (
        <SimpleGrid columns={[1, null, 3]} spacing={10} p={5}>
          {Object.keys(projectList).map((key, index) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
              transition={{ duration: 0.8 }}
              key={index}
            >
              <ProjectCard
                key={index}
                title={projectList[key].title}
                subtitle={projectList[key].subtitle}
                description={projectList[key].description}
                technologies={projectList[key].technologies}
                repoLink={projectList[key].repoLink}
                demoLink={projectList[key].demoLink}
              />
            </motion.div>
          ))}
        </SimpleGrid>
      )}
    </S.SectionContainer>
  )
}

export default Experience
