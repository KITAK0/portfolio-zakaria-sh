import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10 bg-[#0b0d10] pt-24 pb-20 md:pt-28 md:pb-24"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Zakaria Souhar · Digital Marketing
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Strategic Digital Marketer &amp; Founder.
            </h1>
            <p className="mt-6 text-sm leading-7 text-zinc-300 md:text-base">
              Driving measurable growth through data-driven strategies and creative content.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/zakaria-souhar.pdf"
                download
                className="inline-flex items-center justify-center rounded-sm border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Télécharger CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
              >
                Voir Projets
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <figure className="group relative overflow-hidden rounded-sm border border-white/15 bg-white/5 backdrop-blur-sm">
              <img src="/assets/sanlam-1.jpg" alt="Sanlam visual" className="h-52 w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/45 p-2 text-xs text-zinc-200 backdrop-blur-sm">
                SANLAM Campaign
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-sm border border-white/15 bg-white/5 backdrop-blur-sm">
              <img src="/assets/noody-spicy.jpg" alt="Noody visual" className="h-52 w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/45 p-2 text-xs text-zinc-200 backdrop-blur-sm">
                NOODY Campaign
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
