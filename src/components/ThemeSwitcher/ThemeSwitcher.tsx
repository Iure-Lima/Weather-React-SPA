import { useTheme } from '../../context/ThemeContext';
import './ThemeSwitcher.css'

function ThemeSwitcher(){
  const {themeApp, handleSwitcherThemeApp} = useTheme();

  return (
    <div className={`switcher ${themeApp}`} onClick={handleSwitcherThemeApp}>
      <span className='btn-toggle'></span>
    </div>
  )
}

export default ThemeSwitcher;