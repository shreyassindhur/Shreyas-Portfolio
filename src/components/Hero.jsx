import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 px-8 md:px-20 lg:px-32 relative overflow-hidden">

      {/* Left */}
      <div className="flex flex-col justify-center py-32 pr-0 lg:pr-16">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7D9E8C] animate-pulse" />
          <span className="text-[#555] text-xs tracking-widest uppercase">Open to work</span>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-7xl md:text-9xl font-bold leading-none tracking-tighter text-[#E2E2E2]"
          >
            Shreyas
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-7xl md:text-9xl font-bold leading-none tracking-tighter italic text-[#7D9E8C]"
          >
            Sindhur
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#666] text-base leading-relaxed max-w-sm mb-10"
        >
          CS student · Data Science minor · Building ML systems, AI tools,
          and occasionally making art with data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-6 mb-20"
        >
          <a href="#projects" className="text-[#E2E2E2] text-sm border-b border-[#E2E2E2]/20 hover:border-[#7D9E8C] hover:text-[#7D9E8C] pb-0.5 transition-all duration-200">
            See my work
          </a>
          <span className="text-[#333] text-xs">—</span>
          <a href="https://www.linkedin.com/in/shreyas-sindhur-993b7a308/" target="_blank" rel="noreferrer" className="text-[#444] text-xs hover:text-[#E2E2E2] transition-colors duration-200 tracking-widest uppercase">
            LinkedIn
          </a>
          <a href="https://github.com/shreyassindhur" target="_blank" rel="noreferrer" className="text-[#444] text-xs hover:text-[#E2E2E2] transition-colors duration-200 tracking-widest uppercase">
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-10 border-t border-white/5 pt-8"
        >
          <div>
            <span className="block text-2xl font-bold text-[#E2E2E2] tracking-tighter">8.25</span>
            <span className="text-[#444] text-xs uppercase tracking-widest mt-1 block">CGPA</span>
          </div>
          <div className="w-px h-8 bg-white/5" />
          <div>
            <span className="block text-2xl font-bold text-[#E2E2E2] tracking-tighter">5+</span>
            <span className="text-[#444] text-xs uppercase tracking-widest mt-1 block">Projects</span>
          </div>
          <div className="w-px h-8 bg-white/5" />
          <div>
            <span className="block text-2xl font-bold text-[#E2E2E2] tracking-tighter">5 mo</span>
            <span className="text-[#444] text-xs uppercase tracking-widest mt-1 block">Industry</span>
          </div>
        </motion.div>

      </div>

      {/* Right */}
      <div className="hidden lg:flex flex-col justify-center gap-3 py-32 pl-16">

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
            <span className="text-[#333] text-xs ml-2 font-mono">machinemax_pipeline.py</span>
          </div>
          <div className="p-5 font-mono text-xs space-y-1">
            {[
              { text: 'model = XGBClassifier()', color: 'text-[#7D9E8C]' },
              { text: 'cv = GroupKFold(n_splits=5)', color: 'text-[#E2E2E2]' },
              { text: '# no data leakage', color: 'text-[#333]' },
              { text: 'score = cross_val_score(', color: 'text-[#E2E2E2]' },
              { text: '  model, X, y, groups=machine_id,', color: 'text-[#666]' },
              { text: '  scoring="average_precision"', color: 'text-[#7D9E8C]' },
              { text: ')', color: 'text-[#E2E2E2]' },
              { text: '>>> 0.847', color: 'text-[#7D9E8C]' },
            ].map((line, i) => (
              <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.07 }} className={line.color}>
                {line.text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {[
          { name: 'Distill', desc: 'Custom orchestrator-subagent AI research assistant', tag: 'Python · Groq API' },
          { name: 'Safe-Surf', desc: 'Phishing detection — DNN + XGBoost', tag: 'React · FastAPI' },
          { name: 'HealthGuard', desc: 'Symptom-based disease prediction', tag: 'TensorFlow · Streamlit' },
          { name: 'Titanic Analysis', desc: 'ML pipeline with SHAP interpretability', tag: 'XGBoost · SHAP' },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
            className="group flex items-center justify-between bg-[#141414] border border-white/5 hover:border-[#7D9E8C]/20 rounded-xl px-5 py-4 transition-all duration-200"
          >
            <div>
              <span className="text-[#E2E2E2] text-sm font-medium group-hover:text-[#7D9E8C] transition-colors duration-200">{p.name}</span>
              <p className="text-[#444] text-xs mt-0.5">{p.desc}</p>
            </div>
            <span className="text-[#333] text-xs font-mono">{p.tag}</span>
          </motion.div>
        ))}
      </div>

    </section>
  )
}