import { motion } from 'framer-motion';

const education = [
  'Master en Marketing Stratégique et Digital – Université Internationale de Rabat (2022-2024).',
  'Licence Fondamentale en Gestion des Entreprises – FSJES El Jadida (2018-2020).',
  'Classes Préparatoires (PCSI) – Errazi El Jadida (2016-2017).',
];

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
];

export default function About() {
  const strengths = [
    'Content Strategy',
    'Social Media Management',
    'Paid Campaign Coordination',
    'Graphic Design for Digital Channels',
    'Performance Analysis and Reporting',
  ];

  return (
    <section id="about" className="border-b border-white/10 bg-[#0b0d10] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">About</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">Profile</h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
            className="space-y-6 rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <p className="text-sm leading-7 text-zinc-300">
              Marketing specialist with experience in strategic planning, content production, and campaign
              execution for Moroccan and international brands.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-white">Languages</h3>
              <ul className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-300">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span>
                      {lang.name} <span className="text-zinc-400">({lang.level})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
            className="space-y-6 rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div>
              <h3 className="text-sm font-semibold text-white">Education</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {education.map((item) => (
                  <li key={item} className="border-l border-white/20 pl-3">
                    <p className="font-medium text-zinc-100">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Core strengths</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {strengths.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
