import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'
import { PropToggleMode } from '../../models/toggleMode'

const ToggleTheme = ({ toggleMode, themeName }: PropToggleMode) => {
  return (
    <Flex align="center">
      <IconButton
        aria-label="Toggle theme"
        icon={themeName === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleMode}
      />
    </Flex>
  )
}

export default ToggleTheme
