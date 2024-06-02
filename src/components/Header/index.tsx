import { useLanguage } from '../../data/Language'
import { translations } from '../../data/Language/translations'
import TextTransitionComponent from './Title'
import LanguageSwitcher from './languageSwitcher/index.'
import {
  Box,
  Flex,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import * as S from './styles'

const Header: React.FC = () => {
  const { language } = useLanguage()

  // Obter os valores do objeto de traduções e transformá-los em um array
  const headerTexts = Object.values(translations[language].header)

  // Verificar se estamos em uma tela pequena
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box as="header" w="100%" p={4}>
      <Flex
        overflowY={'hidden'}
        justify="space-between"
        align="center"
        wrap="nowrap"
      >
        <Box w={{ base: '100%', md: '50%' }} style={{ overflow: 'hidden' }}>
          <TextTransitionComponent />
        </Box>
        {isMobile ? (
          <>
            {/* <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon color="white" />}
                variant="outline"
                aria-label="Options"
                bg={'#000'}
                _hover={{ bg: '#000' }}
              />
              <MenuList bg={'#000'}>
                {headerTexts.map((text, index) => (
                  <MenuItem bg={'#000'} key={index}>
                    {text}
                  </MenuItem>
                ))}
                <MenuItem bg={'#000'}></MenuItem>
              </MenuList>
            </Menu> */}
            <LanguageSwitcher />
          </>
        ) : (
          <Flex align="center">
            {/* {headerTexts.map((text, index) => (
              <Button key={index} m={2} variant="outline" colorScheme="teal">
                {text}
              </Button>
            ))} */}
            <LanguageSwitcher />
          </Flex>
        )}
      </Flex>
    </Box>
  )
}

export default Header
