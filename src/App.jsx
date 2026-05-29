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
import EasterEgg from './components/EasterEgg'

function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const glow = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
      if (glow.current) {
        glow.current.style.left = `${e.clientX}px`
        glow.current.style.top = `${e.clientY}px`
      }
    }

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (dot.current) dot.current.style.opacity = '0'
    }
    const onLeave = () => {
      if (dot.current) dot.current.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#7D9E8C',
          transition: 'opacity 0.2s',
        }}
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid rgba(125,158,140,0.5)',
        }}
      />
      <div
        ref={glow}
        className="fixed pointer-events-none z-[1]"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(125,158,140,0.05) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'left 1s ease, top 1s ease',
        }}
      />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E2E2E2] font-body">
      <Cursor />
      <EasterEgg />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}