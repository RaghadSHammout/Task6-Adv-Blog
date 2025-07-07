import  { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'

export default function App() {
  const [dark, setDark] = useState(false)
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 2000)  
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <>
      {loading && <Loader />}

      <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <Navbar darkMode={dark} onToggleDark={() => setDark(d => !d)} />
        <main className="max-w-screen-2xl mx-auto px-4 py-8">
          <Outlet context={{ dark }} />
        </main>
        <Footer />
      </div>
    </>
  )
}
