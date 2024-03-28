import { useEffect, useState } from 'react'
import * as db from '../../services/firebase'
import { Project } from '../../models/Project'
import * as S from './styles'

interface Props {
  project: Project
}

const ProjectsPage = ({ project }: Props) => {
  // Request Image
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  useEffect(() => {
    if (!project.imageName) return
    const storage = db.imggetStorage()
    const storageRef = db.imgref(storage)
    const filename = project.imageName
    const imagesRef = db.imgref(storageRef, filename)

    db.imggetDownloadURL(imagesRef)
      .then((url) => {
        setImageUrl(url)
      })
      .catch((error) => {
        console.error('Error getting download URL:', error)
      })
  }, [])

  return (
    <S.ProjectContainer>
      <S.CenterContainer>
        <S.Title>{project.nameProject}</S.Title>
        <S.SubTitle>Tipo: {project.category}</S.SubTitle>
        <S.SubTitle>Responsabilidades: {project.responsability}</S.SubTitle>
      </S.CenterContainer>
      {imageUrl && <img src={imageUrl} alt="Imagem do projeto" />}

      <S.Title>Resumo</S.Title>
      <p>{project.description}</p>
      <p>
        Site Url: <a href={project.pageUrl}>Clique Aqui</a>
      </p>
      <p>
        Github Url: <a href={project.pageUrl}>Clique Aqui</a>
      </p>
      {videoUrl && (
        <video autoPlay loop muted playsInline>
          <source src={videoUrl} />
        </video>
      )}

      <S.Title>Detalhes</S.Title>
      <S.BoldText>
        Responsavel por <S.DetailText>{project.responsability}</S.DetailText>{' '}
      </S.BoldText>
      <S.BoldText>
        Horas de Trabalho <S.DetailText>{project.workHours} Horas</S.DetailText>{' '}
      </S.BoldText>
      <S.BoldText>
        Tecnologias <S.DetailText>{project.technologies}</S.DetailText>{' '}
      </S.BoldText>
      <S.BoldText>
        Software <S.DetailText>{project.software}</S.DetailText>{' '}
      </S.BoldText>
    </S.ProjectContainer>
  )
}

export default ProjectsPage
