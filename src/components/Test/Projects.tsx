// src/components/Projects.tsx

import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
`

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <ProjectCard
        title="Projeto 1"
        description="Uma breve descrição do Projeto 1."
        imageUrl="https://via.placeholder.com/400x200"
        link="https://example.com/projeto1"
      />
      <ProjectCard
        title="Projeto 2"
        description="Uma breve descrição do Projeto 2."
        imageUrl="https://via.placeholder.com/400x200"
        link="https://example.com/projeto2"
      />
      <ProjectCard
        title="Projeto 3"
        description="Uma breve descrição do Projeto 3."
        imageUrl="https://via.placeholder.com/400x200"
        link="https://example.com/projeto3"
      />
    </ProjectsContainer>
  )
}

export default Projects
