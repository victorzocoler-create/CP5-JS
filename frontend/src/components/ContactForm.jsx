import { useState } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  function handleSubmit() {
    if (!email) return
    setEnviado(true)
    setEmail('')
  }

  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Receba ofertas exclusivas 🎉
        </h2>
        <p className="text-white/80 mb-10 text-lg">
          Cadastre seu e-mail e ganhe <span className="font-bold text-yellow-300">R$ 15 de desconto</span> no primeiro pedido!
        </p>
        {enviado ? (
          <div className="bg-white/20 backdrop-blur rounded-2xl p-8">
            <p className="text-white text-2xl font-bold">✅ Incrível! Você está na lista!</p>
            <p className="text-white/80 mt-2">Fique de olho no seu e-mail.</p>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-lg"
            />
            <button
              onClick={handleSubmit}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-2xl transition hover:scale-105"
            >
              Quero!
            </button>
          </div>
        )}
      </div>
    </section>
  )
}