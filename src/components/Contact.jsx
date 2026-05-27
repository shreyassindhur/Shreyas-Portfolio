import { motion } from 'framer-motion'

const currently = [
  { label: 'Building', text: 'Making Distill production-grade' },
  { label: 'Exploring', text: 'LLM ecosystems — Claude, Gemini' },
  { label: 'Learning', text: 'Spark, Hadoop, Kafka · Linux' },
  { label: 'Creating', text: 'A short film + writing stories & blogs' },
]

export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-20 lg:px-32 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#7D9E8C] text-xs uppercase tracking-widest font-medium mb-6">Contact</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Let's work<br />
            <span className="italic text-[#444]">together.</span>
          </h2>
          <p className="text-[#666] text-sm leading-relaxed mb-10 max-w-sm">
            I'm currently looking for internships and full-time opportunities across data science, AI/ML, software development, and other tech-driven roles. Beyond engineering, I enjoy creative work involving content writing, photography, filmmaking, and projects that blend technology with creativity. If you're building something interesting, I'd love to hear about it.
          </p>
          
          <a
            href="mailto:shreyassindhur730@gmail.com"
            className="group inline-flex items-center gap-3 text-[#E2E2E2] hover:text-[#7D9E8C] text-sm transition-colors duration-200"
          >
            <span className="border-b border-[#E2E2E2]/20 group-hover:border-[#7D9E8C] pb-0.5 transition-colors duration-200">
              shreyassindhur730@gmail.com
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
          </a>
          <div className="flex items-center gap-8 mt-8">
            <a href="https://www.linkedin.com/in/shreyas-sindhur-993b7a308/" target="_blank" rel="noreferrer" className="text-[#555] hover:text-[#E2E2E2] text-xs uppercase tracking-widest transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com/shreyassindhur" target="_blank" rel="noreferrer" className="text-[#555] hover:text-[#E2E2E2] text-xs uppercase tracking-widest transition-colors duration-200">GitHub</a>
            <a href="https://medium.com/@shreyassindhur" target="_blank" rel="noreferrer" className="text-[#555] hover:text-[#E2E2E2] text-xs uppercase tracking-widest transition-colors duration-200">Medium</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:pt-20"
        >
          <p className="text-[#333] text-xs uppercase tracking-widest mb-8">Currently</p>
          <div className="flex flex-col divide-y divide-white/5">
            {currently.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-6 py-4"
              >
                <span className="text-[#7D9E8C] text-xs uppercase tracking-widest w-20 flex-shrink-0 pt-0.5">{item.label}</span>
                <span className="text-[#666] text-sm leading-relaxed hover:text-[#E2E2E2] transition-colors duration-200">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}