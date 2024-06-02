import React from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MdLanguage } from 'react-icons/md'
import { useLanguage } from '../../../data/Language'

const LanguageSwitcher: React.FC = () => {
  const { setLanguage, language } = useLanguage()

  return (
    <Menu>
      <MenuButton
        style={{ marginLeft: '1rem' }}
        as={IconButton}
        icon={<MdLanguage color="white" />}
        // rightIcon={<ChevronDownIcon />}
        bg="transparent"
        variant="outline"
        // color="white"
        // _hover={{ bg: '#76d7a8' }}
        _hover={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
      ></MenuButton>
      <MenuList bg={'#000'}>
        <MenuItem
          color={'white'}
          bg={'#000'}
          onClick={() => setLanguage('eng')}
        >
          English
        </MenuItem>
        <MenuItem
          color={'white'}
          bg={'#000'}
          onClick={() => setLanguage('ptbr')}
        >
          Português
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default LanguageSwitcher
