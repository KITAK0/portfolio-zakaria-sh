import { motion } from 'framer-motion';

const websites = [
  'ecristonhymne.com',
  'nextshift.ai',
  'italset.ma',
  'chezmassimo.com',
  'soleyoutdoor.com',
  'excel-clean.ma',
  'archibs.ma',
  'nomad.surf',
  'mabelka.com',
  'dcarbonize.com',
];

export default function WebRealizations() {
  return (
    <section id="web-realizations" className="border-b border-white/10 bg-[#0b0d10] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Web Realizations</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Selected websites
          </h2>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
          className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
        >
          {websites.map((site) => (
            <li key={site} className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 backdrop-blur-md">
              <span className="font-medium">{site}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
