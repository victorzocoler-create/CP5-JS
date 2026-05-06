import { useState, useEffect } from 'react'

export default function Menu() {
  const [comidas, setComidas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=9a887596c80c44699c1d97b5aafe2e24')
      .then(res => res.json())
      .then(data => {
      if (data.recipes) {
        setComidas(data.recipes)
      }
      setLoading(false)
    })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-orange-500 font-semibold text-center mb-2 uppercase tracking-widest text-sm">Cardápio</p>
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          Pratos em Destaque 🔥
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {comidas.map(prato => (
              <div key={prato.id} className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="overflow-hidden h-48">
                  <img
                    src={prato.image}
                    alt={prato.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-1">{prato.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">⏱ {prato.readyInMinutes} min • 👤 {prato.servings} porções</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-extrabold text-lg">
                      R$ {(prato.pricePerServing / 10).toFixed(2)}
                    </span>
                    <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition">
                      + Pedir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}