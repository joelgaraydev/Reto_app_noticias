import React from 'react'
import { themeContent } from '../../state/context/themeProvider'
import styles from './themeButton.module.css'

import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeButton = () => {
  const { theme, setTheme } = React.useContext(themeContent)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className={styles.themeButton} onClick={toggleTheme}>
      {theme === 'light' ? (
        <FaMoon style={{ color: 'white', fontSize: '20px' }} />
      ) : (
        <FaSun style={{ color: 'black', fontSize: '23px' }} />
      )}
    </button>
  )
}

export default ThemeButton
