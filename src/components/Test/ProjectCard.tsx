// src/components/ProjectCard.tsx

import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CardContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  margin: 20px;
  background-color: #111;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const Content = styled.div`
  padding: 20px;
`

const Title = styled(motion.h3)`
  color: #0f0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.8rem;
  margin: 0 0 10px 0;
`

const Description = styled(motion.p)`
  color: #aaa;
  font-size: 1rem;
  margin-bottom: 20px;
`

const ActionButton = styled(motion.a)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0f0;
  color: #111;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #0a0;
  }
`

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link
}) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      <ProjectImage
        src={imageUrl}
        alt={title}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ActionButton href={link} target="_blank" rel="noopener noreferrer">
          Ver Projeto
        </ActionButton>
      </Content>
    </CardContainer>
  )
}

export default ProjectCard
