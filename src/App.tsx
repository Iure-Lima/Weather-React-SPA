import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher.tsx'

function App() {

  return (
    <main className='light'>
      <header>
        <h1>Weather Panel</h1>
        <ThemeSwitcher />
      </header>
    </main>
  )
}

export default App
