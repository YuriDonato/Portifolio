import { useEffect, useState } from 'react'
import * as db from '../../services/firebase'
import { EmptyProjectData, Project } from '../../models/Project'
import * as S from './styles'
import { useAuth } from '../../data/AuthProvider'

interface Props {
  project: Project
}

const ProjectsPage = ({ project }: Props) => {
  return (
    <S.ProjectContainer>
      <S.CenterContainer>
        <S.Title>{project.nameProject}</S.Title>
        <S.SubTitle>Tipo: {project.category}</S.SubTitle>
        <S.SubTitle>Responsabilidades: {project.responsability}</S.SubTitle>
      </S.CenterContainer>
      <S.SectionsContainer>
        <S.Section1>
          <S.Title>Resumo</S.Title>
          <p>{project.description}</p>
          <p>
            Site Url: <a href={project.pageUrl}>Clique Aqui</a>
          </p>
          <p>
            Github Url: <a href={project.pageUrl}>Clique Aqui</a>
          </p>
          <S.Title>Detalhes</S.Title>
          <S.BoldText>
            Responsavel por{' '}
            <S.DetailText>{project.responsability}</S.DetailText>{' '}
          </S.BoldText>
          <S.BoldText>
            Horas de Trabalho
            <S.DetailText>{project.workHours} Horas</S.DetailText>{' '}
          </S.BoldText>
          <S.BoldText>
            Tecnologias <S.DetailText>{project.technologies}</S.DetailText>{' '}
          </S.BoldText>
          <S.BoldText>
            Software <S.DetailText>{project.software}</S.DetailText>{' '}
          </S.BoldText>
        </S.Section1>
        <S.Section2>
          <img src={project.imageName} alt="Imagem do projeto" />
          <video autoPlay loop muted playsInline>
            <source src={project.videoName} />
          </video>
        </S.Section2>
      </S.SectionsContainer>
    </S.ProjectContainer>
  )
}

export default ProjectsPage
