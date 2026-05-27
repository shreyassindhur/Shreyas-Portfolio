import { motion } from 'framer-motion'

const projects = [
  { name: 'Distill', year: '2026', desc: 'AI research assistant with a custom orchestrator-subagent architecture. Searches 5–10 real-time sources, synthesises, and exports structured reports. No frameworks — built from scratch in Python.', stack: ['Python', 'Groq API', 'Streamlit'], solo: true },
  { name: 'Safe-Surf', year: '2025', desc: 'Phishing URL detection combining a Deep Neural Network and XGBoost. FastAPI backend serving real-time predictions with security reports covering SSL validity, domain age, and risk indicators.', stack: ['React.js', 'FastAPI', 'TensorFlow', 'XGBoost'], solo: true },
  { name: 'HealthGuard', year: '2025', desc: 'Disease prediction from user-selected symptoms using a trained MLP. Evaluated MLP, CNN, and LSTM — chose MLP for its accuracy and low compute cost.', stack: ['Python', 'TensorFlow', 'Keras', 'Streamlit'], solo: true },
  { name: 'Titanic Survival Analysis', year: '2026', desc: 'End-to-end ML pipeline across 4 classifiers with full EDA and feature engineering. Applied SHAP summary, waterfall, and dependence plots to explain model decisions.', stack: ['XGBoost', 'Scikit-learn', 'SHAP', 'Pandas'], solo: true },
  { name: 'CrimeRate AI', year: '2025', desc: 'Predicts and compares crime rates across major Indian cities using a regression model trained on historical data. Adjusts for population growth and classifies risk levels.', stack: ['Flask', 'Scikit-learn', 'Chart.js', 'TailwindCSS'], solo: false },
]

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-20 lg:px-32 py-24 border-t border-white/5">

      <p className="text-[#C9983A] text-xs uppercase tracking-widest font-medium mb-4">Projects</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-16 leading-tight">
        Things I've built.
      </h2>

      <div className="flex flex-col divide-y divide-white/5">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 hover:bg-white/[0.015] transition-colors duration-200 rounded-xl px-4 -mx-4"
          >
            <div className="lg:col-span-1 pt-0.5">
              <span className="text-[#333] text-xs font-mono">{project.year}</span>
            </div>
            <div className="lg:col-span-3 flex items-start gap-3">
              <h3 className="text-[#F0EDE6] font-medium text-sm group-hover:text-[#C9983A] transition-colors duration-200">{project.name}</h3>
              {!project.solo && (
                <span className="text-[#444] text-xs border border-white/10 px-2 py-0.5 rounded-full whitespace-nowrap">collab</span>
              )}
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#888580] text-sm leading-relaxed">{project.desc}</p>
            </div>
            <div className="lg:col-span-3 flex flex-wrap gap-2 items-start">
              {project.stack.map(tech => (
                <span key={tech} className="text-[#444] text-xs bg-white/[0.03] border border-white/5 px-2 py-1 rounded-md">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}