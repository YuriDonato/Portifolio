import { useEffect, useState } from 'react'
import ProjectsPage from '../../components/ProjectsPage'
import { EmptyProjectData, Project } from '../../models/Project'
import * as db from '../../services/firebase'
import { Button } from '@chakra-ui/react'

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const refProjects = db.realtimeRef(db.realtimeDatabase, 'projects')
      db.realtimeonValue(refProjects, (snapshot) => {
        const data = snapshot.val()
        const resultadoProjects = Object.entries<Project>(data ?? {}).map(
          ([key, value]) => {
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
          }
        )
        setProjects(resultadoProjects)
      })
    }
    fetchProjects()
  }, [])

  return (
    <>
      <p>criar uma navegacao propria tipo o home/index.tsx</p>
      {projects.map((project) => (
        <div key={project.key}>
          <h1>{project.nameProject}</h1>
          <Button>Ver mais.</Button>
          {/* <ProjectsPage key={project.key} project={project} /> */}
        </div>
      ))}
    </>
  )
}

export default Projects
