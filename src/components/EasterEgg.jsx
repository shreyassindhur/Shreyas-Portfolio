import { useEffect, useState } from 'react'

const lines = [
  { text: '> accessing classified files...', delay: 0 },
  { text: '> identity confirmed: Shreyas Sindhur', delay: 600 },
  { text: '> scanning interests...', delay: 1200 },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', delay: 1800 },
  { text: '✦ Dreams of standing under Iceland\'s aurora', delay: 2200 },
  { text: '✦ Currently writing a short film', delay: 2800 },
  { text: '✦ Fascinated by aviation & how things fly', delay: 3400 },
  { text: '✦ Reads about new places before sleeping', delay: 4000 },
  { text: '✦ Believes evaluation > model choice', delay: 4600 },
  { text: '✦ Writes stories no one has read yet', delay: 5200 },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', delay: 5800 },
  { text: '> end of file. you found this. nice.', delay: 6200 },
]

export default function EasterEgg() {
  const [visible, setVisible] = useState(false)
  const [visibleLines, setVisibleLines] = useState([])
  const [typed, setTyped] = useState('')

  useEffect(() => {
    const onKey = (e) => {
      setTyped(prev => {
        const next = (prev + e.key).slice(-7)
        if (next.toLowerCase() === 'shreyas') {
          setVisible(true)
          setVisibleLines([])
        }
        return next
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!visible) return
    const timers = lines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line.text])
      }, line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [visible])

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        setVisible(false)
        setVisibleLines([])
      }
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(2, 13, 18, 0.92)', backdropFilter: 'blur(8px)' }}
      onClick={() => { setVisible(false); setVisibleLines([]) }}
    >
      <div
        className="relative max-w-lg w-full mx-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Terminal window */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
            <span className="text-[#444] text-xs ml-2 font-mono">classified.sh</span>
            <button
              onClick={() => { setVisible(false); setVisibleLines([]) }}
              className="ml-auto text-[#444] hover:text-[#E2E2E2] text-xs transition-colors duration-200"
            >
              esc to close
            </button>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm space-y-2 min-h-48">
            {visibleLines.map((line, i) => (
              <p
                key={i}
                className={
                  line.startsWith('✦')
                    ? 'text-[#7D9E8C]'
                    : line.startsWith('━')
                    ? 'text-[#222]'
                    : line.includes('confirmed')
                    ? 'text-[#E2E2E2]'
                    : line.includes('end of file')
                    ? 'text-[#7D9E8C]'
                    : 'text-[#555]'
                }
              >
                {line}
              </p>
            ))}
            {visibleLines.length < lines.length && (
              <span className="text-[#7D9E8C] animate-pulse">▋</span>
            )}
          </div>
        </div>
        <p className="text-center text-[#333] text-xs mt-4 font-mono">
          click outside or press esc to close
        </p>
      </div>
    </div>
  )
}