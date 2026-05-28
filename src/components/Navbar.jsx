export default function Navbar() {
  const links = ['About', 'Experience', 'Projects', 'Certifications', 'Contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <a href="#home" className="font-display text-lg text-[#E2E2E2] italic">
        Shreyas<span className="text-[#7D9E8C] not-italic">.</span>
      </a>
      <ul className="flex items-center gap-8">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-[#888] hover:text-[#E2E2E2] text-xs tracking-widest uppercase transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="mailto:shreyassindhur730@gmail.com"
        className="text-xs border border-[#7D9E8C]/30 hover:border-[#7D9E8C] text-[#7D9E8C] px-4 py-2 rounded-full transition-all duration-200"
      >
        Hire me
      </a>
    </nav>
  )
}