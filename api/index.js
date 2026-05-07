require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/api/comidas', async (req, res) => {
  if (!process.env.API_KEY) {
    return res.status(500).json({ error: 'API_KEY não configurada no servidor.' })
  }

  try {
    const number = Number(req.query.number) || 6
    const url = `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${process.env.API_KEY}`
    const response = await fetch(url)

    if (!response.ok) {
      return res.status(response.status).json({ error: `Spoonacular respondeu ${response.status}` })
    }

    const data = await response.json()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Falha ao buscar receitas.', detail: err.message })
  }
})

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`)
  })
}

module.exports = app

