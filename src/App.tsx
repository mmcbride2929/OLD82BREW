import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Rewards from './components/Rewards/Rewards'
import Visit from './components/Visit/Visit'
import footer from './assets/logo.jpg'
import { useState } from 'react'

const App: React.FC = () => {
  const [active, setActive] = useState<boolean>(false)

  const handleActive: () => void = () => {
    setActive(!active)
  }

  return (
    <div className="app">
      <main>
        <Hero handleActive={handleActive} active={active} />
        {!active ? (
          <>
            {' '}
            <About />
            <Menu />
            <Rewards />
            <Visit />
            <footer>
              <a href="#hero">
                <img src={footer} />
              </a>
            </footer>
          </>
        ) : (
          <></>
        )}
      </main>
    </div>
  )
}

export default App
