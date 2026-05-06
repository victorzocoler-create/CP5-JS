export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 flex items-center overflow-hidden">
      {/* Círculos decorativos */}
      <div className="absolute top-[-80px] right-[-80px] w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-60px] left-[-60px] w-80 h-80 bg-pink-300 opacity-20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1 text-white">
          <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 inline-block backdrop-blur">
            🚀 Entrega em até 30 minutos
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Gourmet<span className="text-yellow-300">On</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-md">
            Os melhores restaurantes da cidade direto na sua porta. Rápido, fácil e delicioso.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-orange-500 font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              📱 Baixar App
            </button>
            <button className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition">
              Ver Cardápio ↓
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            {[["10k+", "Clientes"], ["200+", "Restaurantes"], ["4.9★", "Avaliação"]].map(([num, label]) => (
              <div key={label}>
                <p className="text-3xl font-extrabold text-yellow-300">{num}</p>
                <p className="text-white/70 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card flutuante */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-72">
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl h-40 flex items-center justify-center text-7xl mb-4">
              🍕
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Pizza Margherita</h3>
            <p className="text-gray-400 text-sm mb-3">Pizzaria Bella Napoli • 20 min</p>
            <div className="flex items-center justify-between">
              <span className="text-orange-500 font-extrabold text-xl">R$ 42,90</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-orange-600 transition">
                + Pedir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}