import { motion } from 'framer-motion'

const skills = [
  { category: 'Languages', items: ['Python', 'SQL'] },
  { category: 'Machine Learning', items: ['XGBoost', 'Scikit-learn', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'SHAP'] },
  { category: 'AI & LLM Tooling', items: ['Claude API', 'Groq API'] },
  { category: 'Web & Backend', items: ['React.js', 'FastAPI', 'Flask', 'Streamlit'] },
  { category: 'Databases & Tools', items: ['MySQL', 'MongoDB', 'Power BI', 'Git', 'Excel'] },
  { category: 'Cloud', items: ['AWS'] },
]

export default function About() {
  return (
    <section id="about" className="px-8 md:px-20 lg:px-32 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <p className="text-[#7D9E8C] text-xs uppercase tracking-widest font-medium mb-6">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-8">
            Focused on technology that earns<br />
            <span className="italic text-[#444]">relevance through usefulness.</span>
          </h2>
          <div className="space-y-4 text-[#666] text-sm leading-relaxed">
            <p>
              I study Computer Engineering at RAIT, D.Y. Patil University with a minor in Data Science. I'm drawn to problems where the evaluation matters as much as the solution.
            </p>
            <p>
              At <span className="text-[#E2E2E2]">MachineMax</span>, I built a pipeline to predict machine failures from sensor data. A big part of that work was catching a 3–4% inflation in results caused by a flawed validation setup  and fixing it before anything was presented.
            </p>
            <p>
              Outside of tech, I write stories, shoot photos, and am genuinely passionate about filmmaking. At college, I served as <span className="text-[#E2E2E2]">Digital Marketing Head at Social Wing RAIT</span> , managing social media, photographing events, and leading digital promotions. I publish short stories and essays on <a href="https://medium.com/@shreyassindhur" target="_blank" rel="noreferrer" className="text-[#E2E2E2] border-b border-white/20 hover:border-[#7D9E8C] hover:text-[#7D9E8C] transition-colors duration-200">Medium</a>. I've also volunteered with <span className="text-[#E2E2E2]">National Service Scheme(NSS)</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col divide-y divide-white/5"
        >
          {skills.map(({ category, items }) => (
            <div key={category} className="flex gap-8 py-4">
              <span className="text-[#333] text-xs uppercase tracking-widest w-32 flex-shrink-0 pt-0.5">{category}</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {items.map(item => (
                  <span key={item} className="text-[#666] text-sm hover:text-[#E2E2E2] transition-colors duration-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}