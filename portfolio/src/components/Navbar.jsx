import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-md transition-colors duration-200 ${
        scrolled ? 'bg-black/55' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-sm font-semibold tracking-tight text-white">
          ZAKARIA SOUHAR
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/zakaria-souhar.pdf"
            download
            className="rounded-sm border border-white/25 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Télécharger CV
          </a>
        </nav>

        <button
          className="inline-flex items-center rounded-sm border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/70 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-zinc-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/zakaria-souhar.pdf"
              download
              onClick={closeMenu}
              className="inline-flex w-fit items-center rounded-sm border border-white/25 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
