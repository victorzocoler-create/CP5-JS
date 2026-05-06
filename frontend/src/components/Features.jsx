const features = [
  { icon: "⚡", titulo: "Entrega Relâmpago", desc: "Parceiros verificados com entrega média de 28 minutos.", cor: "from-orange-400 to-red-400" },
  { icon: "🍽️", titulo: "200+ Restaurantes", desc: "Das melhores culinárias do mundo até o comfort food que você ama.", cor: "from-pink-400 to-purple-400" },
  { icon: "💳", titulo: "Pague como quiser", desc: "Pix, cartão, vale-refeição ou dinheiro. Zero complicação.", cor: "from-blue-400 to-cyan-400" },
  { icon: "🎁", titulo: "Promoções Diárias", desc: "Descontos exclusivos todo dia pra você economizar mais.", cor: "from-green-400 to-teal-400" },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-orange-500 font-semibold text-center mb-2 uppercase tracking-widest text-sm">Por que o GourmetOn?</p>
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          Feito pra quem ama comer bem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.titulo} className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition-shadow group">
              <div className={`bg-gradient-to-br ${f.cor} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{f.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}