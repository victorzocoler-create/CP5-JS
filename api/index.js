const express = require('express')
const app = express()

app.get('/api/comidas', async (req, res) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=${process.env.API_KEY}`)
  const data = await response.json()
  res.json(data)
})

app.listen(3000)