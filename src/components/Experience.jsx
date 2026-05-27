import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'MachineMax India',
    role: 'Data Science Intern · Remote',
    duration: 'Jan – May 2026',
    points: [
      'Built an end-to-end pipeline predicting machine failures within a 7-day horizon using sensor data like  temperature, vibration, oil pressure, fault codes.',
      'Caught and fixed a flawed validation setup inflating results by 3–4%. Applied GroupKFold to ensure no machine appeared in both train and test sets.',
      'Engineered domain-informed features like stress index, fault severity ratio, service overdue flag. Top model drivers aligned with physical domain logic.',
      'Chose PR-AUC over ROC-AUC as the primary metric correctly, given severe class imbalance and a low failure rate.',
    ],
  },
]

const education = [
  { institution: 'RAIT, D.Y. Patil University', degree: 'B.Tech Computer Engineering · Minor in Data Science', duration: '2022 – Present', meta: '8.25 / 10' },
  { institution: 'Royal Junior College, Dombivli', degree: '12th Grade', duration: '2020 – 2022', meta: '75.5%' },
  { institution: 'Omkar English Medium School', degree: '10th Grade', duration: '2008 – 2020', meta: '79.2%' },
]

export default function Experience() {
  return (
    <section id="experience" className="px-8 md:px-20 lg:px-32 py-24">

      <p className="text-[#7D9E8C] text-xs uppercase tracking-widest font-medium mb-4">Experience</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-16 leading-tight">
        Where I've worked<br />
        <span className="italic text-[#444]">and studied.</span>
      </h2>

      {experiences.map((exp) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
        >
          <div className="lg:col-span-3">
            <h3 className="text-[#E2E2E2] font-semibold text-base">{exp.company}</h3>
            <p className="text-[#7D9E8C] text-xs mt-1">{exp.role}</p>
            <p className="text-[#333] text-xs mt-2">{exp.duration}</p>
          </div>
          <div className="lg:col-span-9">
            <ul className="space-y-3">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-4 text-[#666] text-sm leading-relaxed">
                  <span className="text-[#7D9E8C]/60 mt-1 flex-shrink-0 text-xs">—</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}

      <div className="border-t border-white/5 pt-12">
        <p className="text-[#333] text-xs uppercase tracking-widest mb-6">Education</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-white/5 hover:border-white/10 rounded-xl p-6 transition-colors duration-200"
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-[#E2E2E2] text-sm font-medium leading-snug">{edu.institution}</h3>
                <span className="text-[#7D9E8C] font-semibold text-sm whitespace-nowrap">{edu.meta}</span>
              </div>
              <p className="text-[#444] text-xs">{edu.degree}</p>
              <p className="text-[#333] text-xs mt-1">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}