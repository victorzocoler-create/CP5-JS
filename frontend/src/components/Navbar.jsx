import { useEffect, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#features', label: 'Sobre' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className={`text-2xl font-extrabold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          Gourmet<span className="text-orange-400">On</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-orange-400 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-xl transition"
        >
          Baixar App
        </a>

        <button
          onClick={() => setAberto((v) => !v)}
          aria-label="Abrir menu"
          className={`md:hidden text-2xl ${scrolled ? 'text-gray-800' : 'text-white'}`}
        >
          {aberto ? '✕' : '☰'}
        </button>
      </div>

      {aberto && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 text-sm font-semibold text-gray-700">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="hover:text-orange-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
