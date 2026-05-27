const items = [
  'Python', 'XGBoost', 'Scikit-learn', 'TensorFlow', 'Pandas',
  'NumPy', 'SHAP', 'React.js', 'FastAPI', 'Flask', 'Streamlit',
  'Groq API', 'Claude API', 'MySQL', 'MongoDB', 'Power BI', 'Git', 'AWS',
]

export default function Ticker() {
  return (
    <div className="border-y border-white/5 py-3 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
      <div className="flex animate-ticker whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-4 text-[#2A2A2A] text-xs uppercase tracking-widest font-medium">
            {item}
            <span className="w-1 h-1 rounded-full bg-[#7D9E8C]/30" />
          </span>
        ))}
      </div>
    </div>
  )
}