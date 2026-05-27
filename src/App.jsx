import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Ticker from './components/Ticker'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e
      if (dot.current) dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      if (ring.current) ring.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`
    }
    const onEnter = () => ring.current?.classList.add('scale-150')
    const onLeave = () => ring.current?.classList.remove('scale-150')
    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 w-2 h-2 bg-[#7D9E8C] rounded-full z-[999] pointer-events-none transition-transform duration-75" />
      <div ref={ring} className="fixed top-0 left-0 w-8 h-8 border border-[#7D9E8C]/40 rounded-full z-[999] pointer-events-none transition-transform duration-200" />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E2E2E2] font-body">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Ticker />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}