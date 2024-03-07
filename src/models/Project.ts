export type Project = {
  key: string
  nameProject: string
  description: string
  category: string
  responsability: string
  imageName: string
  
  explanation: string
  pageUrl: string
  repoUrl: string
  videoName: string
  workHours: string
  technologies: string[]
  software: string
}

export const EmptyProjectData: Project = {
  key: '',
  nameProject: '',
  description: '',
  category: '',
  responsability: '',
  imageName: '',
  explanation: '',
  pageUrl: '',
  repoUrl: '',
  videoName: '',
  workHours: '',
  technologies: [''],
  software: ''
}
