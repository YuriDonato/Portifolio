import React from 'react'
import { useLanguage } from '.'

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div>
      <button onClick={() => setLanguage('eng')}>English</button>
      <button onClick={() => setLanguage('ptbr')}>Português</button>
    </div>
  )
}

export default LanguageSwitcher
