import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SANLAM Maroc',
    subtitle: 'Insurance',
    description: 'Insurance and health app communication visuals.',
    assets: [
      { file: 'sanlam-1.jpg', alt: 'SANLAM Maroc campaign visual' },
      { file: 'sanlam-app.jpg', alt: 'SANLAM Maroc health app promotion visual' },
      { file: 'sanlam-auto.jpg', alt: 'SANLAM Maroc auto insurance visual' },
    ],
  },
  {
    title: 'NOODY Maroc',
    subtitle: 'FMCG / Spicy Ramen',
    description: 'Social campaign visuals for product flavors and spicy challenge concepts.',
    assets: [
      { file: 'noody-spicy.jpg', alt: 'NOODY spicy ramen challenge visual' },
      { file: 'noody-flavors.jpg', alt: 'NOODY ramen flavors visual' },
    ],
  },
  {
    title: 'MorHolidays',
    subtitle: 'Travel & Tourism',
    description: 'Promotional design for international travel deals.',
    assets: [{ file: 'travel-promo.jpg', alt: 'MorHolidays travel promotion visual' }],
  },
  {
    title: 'Furniture',
    subtitle: 'E-commerce',
    description: 'Modern furniture promotional creative.',
    assets: [{ file: 'modern-furniture.jpg', alt: 'Modern furniture promotional visual' }],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 bg-[#0b0d10] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mb-10 flex items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Projects</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Featured campaigns
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
          className="space-y-10"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="space-y-4 rounded-sm border border-white/10 bg-white/5 p-5 text-sm text-zinc-300 backdrop-blur-md"
            >
              <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                  {project.subtitle}
                </p>
                <h3 className="text-sm font-semibold text-white">{project.title}</h3>
              </header>
              <p className="max-w-2xl text-sm text-zinc-300">{project.description}</p>

              <div className="columns-1 gap-3 space-y-3 sm:columns-2 lg:columns-3">
                {project.assets.map((asset) => (
                  <figure
                    key={asset.file}
                    className="group relative break-inside-avoid overflow-hidden rounded-sm border border-white/15 bg-white/5"
                  >
                    <img
                      src={`/assets/${asset.file}`}
                      alt={asset.alt}
                      loading="lazy"
                      className="h-auto w-full object-cover"
                    />
                    <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-black/0 p-3 text-xs font-medium text-white opacity-0 transition-all duration-200 group-hover:bg-black/45 group-hover:opacity-100">
                      {project.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
