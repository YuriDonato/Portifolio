import { useEffect, useState, useRef } from 'react'
import * as S from './styles'
import { useLanguage } from '../../../data/Language'
import { translations } from '../../../data/Language/translations'
import { Box, Flex, useBreakpointValue, useToast } from '@chakra-ui/react'
import Spline from '@splinetool/react-spline'
import * as db from '../../../services/firebase'

const Contact = () => {
  const { language } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAvaiable, setIsAvaiable] = useState(true)
  const [message, setMessage] = useState('')

  const splineRef = useRef<HTMLDivElement>(null)

  const toast = useToast()

  const isMobile = useBreakpointValue({ base: true, md: false })

  const messages: { [key: string]: (name: string, email: string) => string } = {
    eng: (name: string, email: string) =>
      `Hi Yuri, I am ${
        name.length <= 0 ? `[your name]` : `${name}`
      } and I am interested in talking with you. Please send me a message and CV to ${
        email.length <= 0 ? `[your email]` : `${email}`
      }. Thanks!`,
    ptbr: (name: string, email: string) =>
      `Olá Yuri, eu sou ${
        name.length <= 0 ? `[seu nome]` : `${name}`
      } e estou interessado em conversar com você. Por favor, envie-me uma mensagem e CV para ${
        email.length <= 0 ? `[seu email]` : `${email}`
      }. Obrigado!`,
    rus: (name: string, email: string) =>
      `Привет, Юрий, я ${
        name.length <= 0 ? `[ваше имя]` : `${name}`
      } и я заинтересован в разговоре с вами. Пожалуйста, отправьте мне сообщение и резюме на ${
        email.length <= 0 ? `[ваш email]` : `${email}`
      }. Спасибо!`,
    esp: (name: string, email: string) =>
      `Hola Yuri, soy ${
        name.length <= 0 ? `[tu nombre]` : `${name}`
      } y estoy interesado en hablar contigo. Por favor, envíame un mensaje y CV a ${
        email.length <= 0 ? `[tu email]` : `${email}`
      }. ¡Gracias!`,
    fr: (name: string, email: string) =>
      `Salut Yuri, je suis ${
        name.length <= 0 ? `[votre nom]` : `${name}`
      } et je suis intéressé à parler avec vous. Veuillez m'envoyer un message et un CV à ${
        email.length <= 0 ? `[votre email]` : `${email}`
      }. Merci !`
  }

  const setMessageBasedOnLanguage = (
    language: string,
    name: string,
    email: string
  ) => {
    if (language in messages) {
      return messages[language](name, email)
    } else {
      return messages['eng'](name, email) // Default to English if language not found
    }
  }

  useEffect(() => {
    if (name.length >= 1 && email.length >= 1) {
      setIsAvaiable(true)
    } else {
      setIsAvaiable(false)
    }
    setMessage(setMessageBasedOnLanguage(language, name, email))
  }, [language, name, email])

  const createMessage = async () => {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1 // Adicionando 1 porque os meses são zero indexados
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const dateString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
    const newData = { message: message, date: dateString }
    const newKey = db.realtimePush(
      db.realtimeChild(db.realtimeRef(db.realtimeDatabase), 'messages')
    ).key
    db.realtimeSet(
      db.realtimeRef(db.realtimeDatabase, `messages/${newKey}`),
      newData
    )
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isAvaiable) {
      toast({
        title: `${translations[language].contact.successMessage}`,
        description: `${translations[language].contact.successDescription}`,
        status: 'success',
        duration: 9000,
        isClosable: true
      })
      createMessage()
      setName('')
      setEmail('')
      setMessage(setMessageBasedOnLanguage(language, name, email))
    } else {
      toast({
        title: `${translations[language].contact.errorMessage}`,
        description: `${translations[language].contact.errorDescription}`,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  return (
    <S.ContactSection>
      {isMobile ? (
        <>
          <Box style={{ width: '100%', height: '300px', marginBottom: '3rem' }}>
            <Spline
              ref={splineRef}
              scene="https://prod.spline.design/oeRPioBttuqIPdML/scene.splinecode"
              style={{ width: '300px', height: '300px' }}
            />
          </Box>
          <S.MainContainer>
            <S.FormContainer>
              <S.Heading>{translations[language].contact.header}</S.Heading>
              <S.Title>{translations[language].contact.title}</S.Title>
              <S.Form onSubmit={handleSubmit}>
                <S.Label>
                  <S.InputTitle>
                    {translations[language].contact.label1}
                  </S.InputTitle>
                  <S.Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={translations[language].contact.input1}
                  />
                </S.Label>
                <S.Label>
                  <S.InputTitle>
                    {translations[language].contact.label2}
                  </S.InputTitle>
                  <S.Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={translations[language].contact.input2}
                  />
                </S.Label>
                <S.Label>
                  <S.InputTitle>
                    {translations[language].contact.label3}
                  </S.InputTitle>
                  <S.TextArea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                    }}
                    readOnly
                  />
                </S.Label>
                <S.Button type="submit">
                  {translations[language].contact.button}
                </S.Button>
              </S.Form>
            </S.FormContainer>
          </S.MainContainer>
        </>
      ) : (
        <>
          <Box as="header" w="100%" p={4}>
            <Flex justify="space-between" align="center" wrap="nowrap">
              <Box
                style={{
                  width: '500px',
                  height: '500px',
                  marginBottom: '3rem'
                }}
              >
                <Spline
                  ref={splineRef}
                  scene="https://prod.spline.design/oeRPioBttuqIPdML/scene.splinecode"
                  style={{ width: '500px', height: '500px' }}
                />
              </Box>
              <S.MainContainer style={{ width: '75%' }}>
                <S.FormContainer>
                  <S.Heading>{translations[language].contact.header}</S.Heading>
                  <S.Title>{translations[language].contact.title}</S.Title>
                  <S.Form onSubmit={handleSubmit}>
                    <S.Label>
                      <S.InputTitle>
                        {translations[language].contact.label1}
                      </S.InputTitle>
                      <S.Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={translations[language].contact.input1}
                      />
                    </S.Label>
                    <S.Label>
                      <S.InputTitle>
                        {translations[language].contact.label2}
                      </S.InputTitle>
                      <S.Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={translations[language].contact.input2}
                      />
                    </S.Label>
                    <S.Label>
                      <S.InputTitle>
                        {translations[language].contact.label3}
                      </S.InputTitle>
                      <S.TextArea
                        value={message}
                        readOnly
                        onChange={(e) => {
                          setMessage(e.target.value)
                        }}
                      />
                    </S.Label>
                    <S.Button type="submit">
                      {translations[language].contact.button}
                    </S.Button>
                  </S.Form>
                </S.FormContainer>
              </S.MainContainer>
            </Flex>
          </Box>
        </>
      )}
    </S.ContactSection>
  )
}

export default Contact
