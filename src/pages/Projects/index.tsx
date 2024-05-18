import { useEffect, useState } from 'react'
import ProjectsPage from '../../components/ProjectsPage'
import { EmptyProjectData, Project } from '../../models/Project'
import * as db from '../../services/firebase'
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  useMediaQuery
} from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useTheme } from 'styled-components'
import { useAuth } from '../../data/AuthProvider'
import * as S from './styles'

const Projects = () => {
  const { setCurrentProject, setCurrentPage, currentProject, currentPage } =
    useAuth()
  const [projects, setProjects] = useState<Project[]>([])
  const theme = useTheme()
  const [isLargeScreen] = useMediaQuery('(min-width: 1024px)')
  const [isMediumScreen] = useMediaQuery('(min-width: 768px)')

  const fetchImages = async (projects: Project[]) => {
    const storage = db.imggetStorage()

    // Mapeando as promessas das URLs das imagens
    const imageURLPromises = projects.map(async (project) => {
      const spaceRef = db.imgref(storage, project.imageName)
      return db.imggetDownloadURL(spaceRef)
    })

    // Aguardando todas as promessas serem resolvidas
    const imageURLs = await Promise.all(imageURLPromises)

    // Atualizando os projetos com as URLs das imagens
    const updatedProjects = projects.map((project, index) => {
      return {
        ...project,
        imageName: imageURLs[index]
      }
    })

    return updatedProjects
  }

  useEffect(() => {
    const fetchProjectsAndImages = async () => {
      const refProjects = db.realtimeRef(db.realtimeDatabase, 'projects')
      db.realtimeonValue(refProjects, async (snapshot) => {
        const data = snapshot.val()
        const fetchedProjects = await Promise.all(
          Object.entries<Project>(data ?? {}).map(async ([key, value]) => {
            return {
              key: key,
              nameProject: value.nameProject,
              description: value.description,
              category: value.category,
              responsability: value.responsability,
              imageName: value.imageName,
              explanation: value.explanation,
              pageUrl: value.pageUrl,
              repoUrl: value.repoUrl,
              videoName: value.videoName,
              workHours: value.workHours,
              technologies: value.technologies,
              software: value.software
            }
          })
        )

        fetchedProjects.sort(
          (a, b) => parseInt(b.workHours) - parseInt(a.workHours)
        )

        // Busca as imagens para os projetos
        const projectsWithImages = await fetchImages(fetchedProjects)

        // Atualiza os projetos com as URLs das imagens
        setProjects(projectsWithImages)
      })
    }

    fetchProjectsAndImages()
  }, [])

  let columnNumber = 1
  if (isLargeScreen) {
    columnNumber = 4
  } else if (isMediumScreen) {
    columnNumber = 3
  } else {
    columnNumber = 1
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentPage('project')
    scrollToTop()
  }

  useEffect(() => {
    scrollToTop()
  }, [currentProject])

  return (
    <>
      {currentPage === 'projects' && ( // Verifica se a página atual é "experiências"
        <Grid
          style={{ marginTop: '1rem' }}
          templateColumns={`repeat(${columnNumber}, 1fr)`}
          gap={6}
        >
          {projects.map((project) => (
            <GridItem key={project.key}>
              <Box
                p={5}
                borderRadius="xl"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ transform: 'scale(1.05)' }}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  backgroundImage={`url(${project.imageName})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  opacity={0.7}
                  borderRadius="xl"
                  filter="blur(5px)" // Adiciona um efeito de desfoque à imagem de fundo
                  zIndex={-1}
                />
                <Box
                  position="relative"
                  zIndex={1}
                  textAlign="center"
                  color="white"
                >
                  <Heading size="md" mb={4}>
                    {project.nameProject}
                  </Heading>
                  <Box textAlign="center" mb={4}>
                    <p>{project.explanation}</p>
                  </Box>
                  <Button
                    colorScheme="green"
                    size="sm" // Reduz o tamanho do botão
                    _hover={{ bg: theme.mediumGreen }}
                    leftIcon={<FaExternalLinkAlt />} // Adiciona um ícone à esquerda do texto do botão
                    onClick={() => {
                      handleClick(project)
                    }}
                  >
                    Ver mais
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      )}
      {currentPage === 'project' ? (
        <>
          <>
            <S.ProjectContainer>
              <S.CenterContainer>
                <S.Title>{currentProject.nameProject}</S.Title>
                <S.SubTitle>Tipo: {currentProject.category}</S.SubTitle>
                <S.SubTitle>
                  Responsabilidades: {currentProject.responsability}
                </S.SubTitle>
              </S.CenterContainer>
              <S.SectionsContainer>
                <S.Section1>
                  <S.Title>Resumo</S.Title>
                  {currentProject.description
                    .split('/br')
                    .map((line, index) => (
                      <p style={{ marginBottom: '0.30rem' }} key={index}>
                        {line}
                      </p>
                    ))}{' '}
                  <p style={{ marginTop: '0.7rem' }}>
                    Site Url: <a href={currentProject.pageUrl}>Clique Aqui</a>
                  </p>
                  <p>
                    Github Url: <a href={currentProject.pageUrl}>Clique Aqui</a>
                  </p>
                  <S.Title>Detalhes</S.Title>
                  <S.BoldText>
                    Responsavel por{' '}
                    <S.DetailText>{currentProject.responsability}</S.DetailText>{' '}
                  </S.BoldText>
                  <S.BoldText>
                    Horas de Trabalho
                    <S.DetailText>
                      {currentProject.workHours} Horas
                    </S.DetailText>{' '}
                  </S.BoldText>
                  {/* <S.BoldText>
                    Tecnologias{' '}
                    <S.DetailText>{currentProject.technologies}</S.DetailText>{' '}
                  </S.BoldText> */}
                  <S.BoldText>
                    Software{' '}
                    <S.DetailText>{currentProject.software}</S.DetailText>{' '}
                  </S.BoldText>
                </S.Section1>
                <S.Section2>
                  <img src={currentProject.imageName} alt="Imagem do projeto" />
                  <video autoPlay loop muted playsInline>
                    <source src={currentProject.videoName} />
                  </video>
                </S.Section2>
              </S.SectionsContainer>
            </S.ProjectContainer>
          </>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Projects
