import { useState } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.tsx'
import SearchBar from './components/SearchBar/SearchBar.tsx';

function App() {
  const [themeApp, setThemeApp] = useState("light");

  const handleSwitcherThemeApp = () => {
    setThemeApp(themeApp === "light" ? "dark" : "light")
  }

  return (
    <main className={`${themeApp}`}>
      <header>
        <h1>Weather Panel</h1>
        <ThemeSwitcher callback={handleSwitcherThemeApp} />
      </header>
      <section className='container'>
        <SearchBar />
      </section>
    </main>
  )
}

export default App
