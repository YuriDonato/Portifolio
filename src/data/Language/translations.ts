type TranslationsType = {
  [key: string]: {
    [key: string]: {
      [key: string]: string
    }
  }
}

export const translations: TranslationsType = {
  eng: {
    header: {
      text1: 'About',
      text2: 'Works',
      text3: 'Contact'
    },
    about: {
      title: "I'm",
      description: 'Turning Ideas into Interactive and Efficient Web Realities.'
    },
    introduction: {
      header: 'INTRODUCTION',
      title: 'Overview',
      description:
        "I'm a fervent advocate for clean, understandable, and scalable code that precisely meets client and business needs. My professional journey is characterized by a commitment to team collaboration and a ceaseless curiosity for learning new technologies. I am result-oriented and thrive in environments that embrace agile methodologies and Scrum frameworks. I believe in prioritizing the user experience—it's not just about building a website or software, but about crafting experiences that resonate and satisfy. I find joy in the challenges and creativity of programming; its not just my career, its a playground for innovation."
    },
    experience: {
      header: 'My Journey So Far',
      title: 'Work Highlights',
      buttonHover: 'Visit',
      button1: 'See Repo',
      button2: 'See Demo',
      button3: 'Demo/Repo not avaiable'
    },
    contact: {
      header: 'GET IN TOUCH',
      title: 'Contact.',
      label1: 'Your Name',
      label2: 'Your email',
      label3: 'Your Message',
      input1: "What's your name?",
      input2: "What's your web address?",
      button: 'Send',
      successMessage: 'Message Sent',
      successDescription: 'I will get in touch soon.',
      errorMessage: 'Error sending message.',
      errorDescription: 'Please check your name and email and try again.'
    }
  },
  ptbr: {
    header: {
      text1: 'Sobre',
      text2: 'Experiências',
      text3: 'Contato'
    },
    about: {
      title: 'Sou',
      description:
        'Transformando Ideias em Realidades Web Interativas e Eficientes.'
    },
    introduction: {
      header: 'INTRODUÇÃO',
      title: 'Visão Geral',
      description:
        'Sou um fervoroso defensor de código limpo, compreensível e escalável que atende precisamente às necessidades dos clientes e dos negócios. Minha trajetória profissional é caracterizada pelo compromisso com a colaboração em equipe e uma curiosidade incessante por aprender novas tecnologias. Sou orientado a resultados e prospero em ambientes que adotam metodologias ágeis e frameworks Scrum. Acredito na priorização da experiência do usuário — não se trata apenas de construir um site ou software, mas de criar experiências que ressoem e satisfaçam. Encontro alegria nos desafios e na criatividade da programação; não é apenas minha carreira, é um playground para a inovação.'
    },
    experience: {
      header: 'Minha Jornada Até Agora',
      title: 'Destaques Profissionais',
      buttonHover: 'Visitar',
      button1: 'Ver Repositório',
      button2: 'Ver Demo',
      button3: 'Demo/Repositório não disponivel'
    },
    contact: {
      header: 'ENTRE EM CONTATO',
      title: 'Contato.',
      label1: 'Seu Nome',
      label2: 'Seu Email',
      label3: 'Sua Mensagem',
      input1: 'Qual é o seu nome?',
      input2: 'Qual é o seu endereço de e-mail?',
      button: 'Enviar',
      successMessage: 'Mensagem Enviada',
      successDescription: 'Em breve entrarei em contato.',
      errorMessage: 'Error sending message.',
      errorDescription: 'Please check your name and email and try again.'
    }
  }
}
