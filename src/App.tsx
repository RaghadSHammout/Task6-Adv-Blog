import  { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={`min-h-screen ${dark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={dark} onToggleDark={() => setDark(d => !d)} />
      <main className="max-w-screen-2xl mx-auto px-4 py-8">
        <Outlet context={{ dark }} />
      </main>

      <Footer />
    </div>
  )
}
