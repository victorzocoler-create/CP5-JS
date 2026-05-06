const depoimentos = [
  { nome: "Ana Paula", cidade: "São Paulo, SP", texto: "Nunca mais pedi comida de outro jeito. Chegou em 25 minutos e ainda veio quentinho!", estrelas: 5, emoji: "👩‍💼" },
  { nome: "Carlos Silva", cidade: "Rio de Janeiro, RJ", texto: "A variedade de restaurantes é absurda. Todo dia descubro algo novo!", estrelas: 5, emoji: "👨‍💻" },
  { nome: "Juliana Ramos", cidade: "Curitiba, PR", texto: "Interface incrível, super intuitiva. O pagamento via Pix é rapidíssimo.", estrelas: 4, emoji: "👩‍🎨" },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-orange-500 font-semibold text-center mb-2 uppercase tracking-widest text-sm">Depoimentos</p>
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          Quem usa, aprova ❤️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((d) => (
            <div key={d.nome} className="bg-white rounded-3xl shadow p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: d.estrelas }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{d.texto}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full flex items-center justify-center text-2xl">
                  {d.emoji}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{d.nome}</p>
                  <p className="text-gray-400 text-sm">{d.cidade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}