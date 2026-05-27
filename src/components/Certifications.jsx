import { motion } from 'framer-motion'

const groups = [
  {
    issuer: 'Amazon Web Services',
    short: 'AWS',
    certs: [
      { name: 'Cloud Foundations', link: 'https://www.credly.com/badges/9d107532-f230-474c-b692-dde68e5d8608/public_url' },
      { name: 'Cloud Architecting', link: 'https://www.credly.com/badges/0f7bdb44-d402-408e-b7e1-9e2e6a99696b/linked_in_profile' },
    ],
  },
  {
    issuer: 'Anthropic',
    short: 'Anthropic',
    certs: [
      { name: 'Claude API', link: 'https://verify.skilljar.com/c/wxgtgxs2bmki' },
      { name: 'Claude & MCP', link: 'https://verify.skilljar.com/c/rdxszbuxqegb' },
    ],
  },
  {
    issuer: 'SAP',
    short: 'SAP',
    certs: [
      { name: 'SAP BTP', link: 'https://badger.learning.sap.com/verify/xikom-hesyn-vepid-ricol-ryrov' },
      { name: 'SAP EWM S/4HANA', link: 'https://badger.learning.sap.com/verify/xevyr-nudyl-vyfek-melot-mihuk' },
    ],
  },
  {
    issuer: 'Oracle',
    short: 'Oracle',
    certs: [
      { name: 'Database for Developers', link: 'https://drive.google.com/file/d/1TAt9LLeAINbJTImYpPMpDGq-tthqvSTQ/view?usp=sharing' },
    ],
  },
  {
    issuer: 'HackerRank',
    short: 'HackerRank',
    certs: [
      { name: 'Python', link: 'https://www.hackerrank.com/certificates/519c81f3aa84' },
      { name: 'SQL', link: 'https://www.hackerrank.com/certificates/3e25db2e31c6' },
    ],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-8 md:px-20 lg:px-32 py-24">

      <p className="text-[#7D9E8C] text-xs uppercase tracking-widest font-medium mb-4">Certifications</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-16 leading-tight">
        Verified credentials.
      </h2>

      <div className="flex flex-col divide-y divide-white/5">
        {groups.map((group, gi) => (
          <motion.div
            key={group.issuer}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.07 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-6 group"
          >
            {/* Issuer */}
            <div className="lg:col-span-3 flex items-start gap-3 pt-0.5">
              <span className="text-[#7D9E8C] text-xs font-mono mt-0.5">
                {String(gi + 1).padStart(2, '0')}
              </span>
              <span className="text-[#E2E2E2] text-sm font-medium">{group.issuer}</span>
            </div>

            {/* Certs */}
            <div className="lg:col-span-9 flex flex-wrap gap-3">
              {group.certs.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/cert flex items-center gap-2 border border-white/5 hover:border-[#7D9E8C]/30 bg-white/[0.02] hover:bg-white/[0.04] rounded-lg px-4 py-2.5 transition-all duration-200"
                >
                  <span className="text-[#888580] text-xs group-hover/cert:text-[#E2E2E2] transition-colors duration-200">
                    {cert.name}
                  </span>
                  <span className="text-[#333] text-xs group-hover/cert:text-[#7D9E8C] transition-colors duration-200">↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}