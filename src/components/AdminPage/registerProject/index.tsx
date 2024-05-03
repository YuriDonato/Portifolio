import React, { useState, useEffect, FormEvent } from 'react'
import * as db from '../../../services/firebase'
import {
  FormControl,
  Input,
  Button,
  Box,
  Text,
  useToast,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  Stack,
  Checkbox
} from '@chakra-ui/react'
import { EmptyProjectData, Project } from '../../../models/Project'

const RegisterProjectTab = () => {
  const [projectData, setProjectData] = useState<Project>(EmptyProjectData)
  const toast = useToast()

  const techs = ['ReactJS', 'JavaScript', 'VueJs']

  const createPathologyData = async (event: FormEvent) => {
    event.preventDefault()
    // Adicione os sintomas selecionados aos dados da patologia
    const newData = projectData
    const newKey = db.realtimePush(
      db.realtimeChild(db.realtimeRef(db.realtimeDatabase), 'projects')
    ).key
    newData.key = newKey!
    db.realtimeSet(
      db.realtimeRef(db.realtimeDatabase, `projects/${newKey}`),
      newData
    )
    setProjectData(EmptyProjectData)
    toast({
      title: 'Projeto criado com sucesso!',
      status: 'success',
      position: 'bottom',
      duration: 9000,
      isClosable: true
    })
  }

  return (
    <>
      <form style={{ color: 'white' }} onSubmit={createPathologyData}>
        <FormControl>
          <FormLabel>Nome do Projeto</FormLabel>
          <Input
            value={projectData.nameProject}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                nameProject: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>Descrição</FormLabel>
          <Input
            value={projectData.description}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                description: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>Categoria</FormLabel>
          <RadioGroup
            value={projectData.category}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                category: e
              })
            }
          >
            <HStack spacing="24px">
              <Radio value="bacteria">Bacterias</Radio>
              <Radio value="fungo">Fungos</Radio>
              <Radio value="virus">Virus</Radio>
            </HStack>
          </RadioGroup>
          <FormLabel>Responsabilidades</FormLabel>
          <Input
            value={projectData.responsability}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                responsability: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>Explicação do projeto</FormLabel>
          <Input
            value={projectData.explanation}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                explanation: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>Link da pagina</FormLabel>
          <Input
            value={projectData.pageUrl}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                pageUrl: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>Link do repositorio</FormLabel>
          <Input
            value={projectData.repoUrl}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                repoUrl: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>ID da imagem (ex: eldenring.png)</FormLabel>
          <Input
            value={projectData.imageName}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                imageName: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>ID do video (ex: eldenring.mp4)</FormLabel>
          <Input
            value={projectData.videoName}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                videoName: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>Horas trabalhadas (inserir numero)</FormLabel>
          <Input
            value={projectData.workHours}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                workHours: e.target.value
              })
            }
            type="text"
          />
          <FormLabel>Tecnologias usadas (ex: Tech1 / Tech2 / Tech 3)</FormLabel>
          <Input value={projectData.technologies} type="text" />
          <FormLabel>Software</FormLabel>
          <Input
            value={projectData.software}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                software: e.target.value
              })
            }
            type="text"
          />
        </FormControl>
        <Button marginTop={'1rem'} type="submit">
          Criar Patologia
        </Button>
      </form>
    </>
  )
}

export default RegisterProjectTab
