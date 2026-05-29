import { useEffect, useState } from 'react'

const lines = [
  { text: 'hey, you actually typed my name.', delay: 0, style: 'muted' },
  { text: 'here\'s what the resume doesn\'t say —', delay: 800, style: 'muted' },
  { text: '🏔  iceland is on my bucket list. aurora or bust.', delay: 1800, style: 'highlight' },
  { text: '✈  aviation genuinely fascinates me. i read about it for fun.', delay: 2700, style: 'highlight' },
  { text: '🎬  i\'m working on a short film. slowly. carefully.', delay: 3600, style: 'highlight' },
  { text: '📖  i write stories no one has read yet. maybe someday.', delay: 4500, style: 'highlight' },
  { text: '🌊  i think going really deep into anything is the point.', delay: 5400, style: 'highlight' },
  { text: '🤫  not many people find this. glad you did.', delay: 6400, style: 'accent' },
]

export default function EasterEgg() {
  const [visible, setVisible] = useState(false)
  const [visibleLines, setVisibleLines] = useState([])
  const [typed, setTyped] = useState('')
  const [closing, setClosing] = useState(false)

  const close = () => {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      setVisibleLines([])
      setClosing(false)
    }, 400)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { close(); return }
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
        setVisibleLines(prev => [...prev, { text: line.text, style: line.style }])
      }, line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-6"
      style={{
        background: 'rgba(2, 13, 18, 0.85)',
        backdropFilter: 'blur(12px)',
        opacity: closing ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}
      onClick={close}
    >
      <div
        className="relative max-w-md w-full"
        style={{
          transform: closing ? 'translateY(20px)' : 'translateY(0)',
          transition: 'transform 0.4s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Top accent line */}
          <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #7D9E8C, transparent)' }} />

          <div className="px-8 py-10 space-y-1">
            {visibleLines.map((line, i) => (
              <div
                key={i}
                style={{
                  animation: 'fadeSlideUp 0.5s ease both',
                }}
              >
                <p
                  className={`text-sm leading-relaxed ${
                    line.style === 'highlight'
                      ? 'text-[#C8D8D0]'
                      : line.style === 'accent'
                      ? 'text-[#7D9E8C]'
                      : 'text-[#555]'
                  }`}
                  style={{
                    fontFamily: line.style === 'muted' ? 'monospace' : 'inherit',
                    fontSize: line.style === 'muted' ? '11px' : '14px',
                    letterSpacing: line.style === 'muted' ? '0.05em' : '0',
                    paddingTop: i === 2 ? '16px' : '0',
                    paddingBottom: i === lines.length - 1 ? '0' : '0',
                  }}
                >
                  {line.text}
                </p>
              </div>
            ))}

            {visibleLines.length < lines.length && (
              <span
                className="inline-block w-1 h-4 ml-1"
                style={{
                  background: '#7D9E8C',
                  animation: 'blink 1s step-end infinite',
                  verticalAlign: 'middle',
                }}
              />
            )}
          </div>

          {/* Bottom */}
          {visibleLines.length === lines.length && (
            <div
              className="px-8 pb-8 flex justify-between items-center"
              style={{ animation: 'fadeSlideUp 0.5s ease both' }}
            >
              <span className="text-[#333] text-xs">— S</span>
              <button
                onClick={close}
                className="text-[#444] hover:text-[#7D9E8C] text-xs transition-colors duration-200"
                style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}
              >
                esc
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}