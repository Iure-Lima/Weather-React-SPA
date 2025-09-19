import { useState } from 'react';
import './ThemeSwitcher.css'

function ThemeSwitcher(){
  const [theme, setTheme] = useState("light");

  const handleSwitcherTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className={`switcher ${theme}`} onClick={handleSwitcherTheme}>
      <span className='btn-toggle'></span>
    </div>
  )
}

export default ThemeSwitcher;