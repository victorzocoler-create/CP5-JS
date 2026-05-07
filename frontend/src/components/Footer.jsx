export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-extrabold text-white">Gourmet<span className="text-orange-400">On</span></h2>
            <p className="text-gray-500 mt-2 max-w-sm">
              Sua plataforma favorita para delivery de comida. Rápido, seguro e com as melhores opções da cidade.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 (11) 99999-8888</li>
              <li>📧 contato@gourmeton.com.br</li>
              <li>📍 Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-orange-400 transition">Instagram</a>
              <a href="#" className="hover:text-orange-400 transition">Facebook</a>
              <a href="#" className="hover:text-orange-400 transition">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 GourmetOn. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}