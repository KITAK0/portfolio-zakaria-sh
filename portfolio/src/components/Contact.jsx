import { useState } from 'react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    label: 'Phone',
    value: '0613031413',
    href: 'tel:0613031413',
  },
  {
    label: 'Email',
    value: 'sh.kzakaria98@gmail.com',
    href: 'mailto:sh.kzakaria98@gmail.com',
  },
  {
    label: 'Address',
    value: '79 RUE 1 HAY ERRYAD EL JADIDA',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Required';
    if (!form.email.trim()) nextErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Invalid email';
    if (!form.message.trim()) nextErrors.message = 'Required';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-[#0b0d10] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Contact</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Work together
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
          className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]"
        >
          <div className="space-y-4 rounded-sm border border-white/10 bg-white/5 p-6 text-sm text-zinc-300 backdrop-blur-md">
            <p>
              For new mandates, collaborations, or project discussions, feel free to reach out using the form or
              the details below.
            </p>
            <ul className="space-y-2 text-sm">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 text-sm text-zinc-100 underline-offset-2 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="mt-1 text-sm text-zinc-100">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-sm border border-white/10 bg-white/5 p-6 text-sm text-zinc-100 backdrop-blur-md">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className="h-10 rounded-sm border border-white/15 bg-black/20 px-3 text-sm text-white outline-none transition-colors focus:border-white/40"
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className="h-10 rounded-sm border border-white/15 bg-black/20 px-3 text-sm text-white outline-none transition-colors focus:border-white/40"
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="rounded-sm border border-white/15 bg-black/20 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/40"
              />
              {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center rounded-sm border border-white/20 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-black transition-colors hover:bg-zinc-200"
              >
                Submit
              </button>
              {submitted && (
                <span className="text-xs text-zinc-400">Message sent. Thank you.</span>
              )}
            </div>
          </form>
        </motion.div>

        <footer className="mt-10 border-t border-white/10 pt-4 text-xs text-zinc-400">
          © 2026 Zakaria Souhar.
        </footer>
      </div>
    </section>
  );
}
