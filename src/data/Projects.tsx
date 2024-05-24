export interface Project {
  title: string
  subtitle: string
  description: string[]
  technologies: string[]
  repoLink: string
  demoLink: string
}

export interface Projects {
  eng: Project[]
  ptbr: Project[]
}
export const projects: Projects = {
  eng: [
    {
      title: 'My Cool Project',
      subtitle: 'An amazing project I made',
      description: [
        'Implementation of features X, Y, and Z',
        'Utilization of modern technologies',
        'Focus on user experience'
      ],
      technologies: ['React', 'TypeScript', 'Chakra UI'],
      repoLink: 'https://github.com/your-repo',
      demoLink: 'https://your-demo-site.com'
    },
    {
      title: 'My Cool Project 2',
      subtitle: 'Another amazing project I made',
      description: [
        'Implementation of features A, B, and C',
        'Using state-of-the-art tools',
        'Emphasis on usability'
      ],
      technologies: ['React', 'TypeScript', 'Chakra UI'],
      repoLink: 'https://github.com/your-repo',
      demoLink: 'https://your-demo-site.com'
    }
  ],
  ptbr: [
    {
      title: 'Meu Projeto Legal',
      subtitle: 'Um projeto incrível que fiz',
      description: [
        'Implementação de funcionalidades X, Y e Z',
        'Utilização de tecnologias modernas',
        'Foco na experiência do usuário'
      ],
      technologies: ['React', 'TypeScript', 'Chakra UI'],
      repoLink: 'https://github.com/seu-repositorio',
      demoLink: 'https://seu-demo-site.com'
    },
    {
      title: 'Meu Projeto Legal 2',
      subtitle: 'Um projeto incrível que fiz',
      description: [
        'Implementação de funcionalidades X, Y e Z',
        'Utilização de tecnologias modernas',
        'Foco na experiência do usuário'
      ],
      technologies: ['React', 'TypeScript', 'Chakra UI'],
      repoLink: 'https://github.com/seu-repositorio',
      demoLink: 'https://seu-demo-site.com'
    }
  ]
}
