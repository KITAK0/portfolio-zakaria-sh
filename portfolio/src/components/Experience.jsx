import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Digital Marketing Intern',
    company: 'Omniscient Agency',
    period: '2024',
    details: 'Content creation for SANLAM, NOODY, DALIA. Managed influencer relations for NIVEA.',
  },
  {
    role: 'Founder',
    company: 'SOUHAR.AGENCY',
    period: '2022',
    details: 'Specialized in social media management, Facebook Ads campaigns, and content marketing.',
  },
  {
    role: 'Financial Intern',
    company: 'FATHI MESSAGERIE',
    period: '2021',
    details: 'Financial Intern handling data and reporting.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-white/10 bg-[#0b0d10] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Experience</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Professional background
          </h2>
        </motion.div>

        <motion.ol
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
          className="relative space-y-6 rounded-sm border border-white/10 bg-white/5 p-6 pl-8 text-sm text-zinc-300 backdrop-blur-md"
        >
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.role}`} className="relative">
              <span className="absolute -left-[17px] top-2 h-2 w-2 rounded-full bg-white" />
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                {exp.period}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{exp.role}</p>
              <p className="text-xs text-zinc-400">{exp.company}</p>
              <p className="mt-2 text-sm text-zinc-300">{exp.details}</p>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
