export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Gourmet<span className="text-orange-400">On</span></h2>
            <p className="text-gray-500 mt-1">Comida boa, entrega rápida. 🍔</p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#features" className="hover:text-orange-400 transition">Sobre nós</a>
            <a href="#cardapio" className="hover:text-orange-400 transition">Cardápio</a>
            <a href="#depoimentos" className="hover:text-orange-400 transition">Depoimentos</a>
            <a href="#contato" className="hover:text-orange-400 transition">Contato</a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>© 2025 GourmetOn. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}