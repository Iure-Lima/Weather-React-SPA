import { useState } from 'react';
import './ThemeSwitcher.css'

function ThemeSwitcher(props: { callback: () => void; }){
  const [theme, setTheme] = useState("light");

  const handleSwitcherTheme = () => {
    props.callback()
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className={`switcher ${theme}`} onClick={handleSwitcherTheme}>
      <span className='btn-toggle'></span>
    </div>
  )
}

export default ThemeSwitcher;