import { useEffect, useState } from 'react'
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

  const toast = useToast()

  const isMobile = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    language === 'eng'
      ? setMessage(
          `Hi Yuri, I am ${
            name.length <= 0 ? `[your name]` : `${name}`
          } and I am interested in talking with you. Please send me a message and CV to ${
            email.length <= 0 ? `[your email]` : `${email}`
          }. Thanks!`
        )
      : setMessage(
          `Olá Yuri, eu sou ${
            name.length <= 0 ? `[seu nome]` : `${name}`
          } e estou interessado em conversar com você. Por favor, envie-me uma mensagem e CV para ${
            email.length <= 0 ? `[seu email]` : `${email}`
          }. Obrigado!`
        )
  }, [name, email])

  const createMessage = async () => {
    // Adicione os sintomas selecionados aos dados da patologia
    const newData = message
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
          <Spline
            style={{ transform: 'scale(1.5)', marginBottom: '3rem' }}
            scene="https://prod.spline.design/oeRPioBttuqIPdML/scene.splinecode"
          />{' '}
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
              <Spline
                style={{ transform: 'scale(2)' }}
                scene="https://prod.spline.design/oeRPioBttuqIPdML/scene.splinecode"
              />
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
