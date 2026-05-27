import { useState, useEffect } from 'react'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="px-8 md:px-20 lg:px-32 py-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <span className="font-display italic text-[#F0EDE6] text-sm">
        Shreyas<span className="text-[#C9983A] not-italic">.</span>
      </span>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[#444] text-xs font-mono">Mumbai · {time}</span>
      </div>
      <span className="text-[#333] text-xs">Built from scratch. No templates.</span>
    </footer>
  )
}