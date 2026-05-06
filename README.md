# 🍔 GourmetOn — Landing Page

Landing page do app de delivery **GourmetOn**, desenvolvida como entrega do **Check-Point 05** da disciplina de *Web Development with JS* (FIAP).

A página apresenta o aplicativo, lista um cardápio dinâmico carregado da [Spoonacular API](https://spoonacular.com/food-api) e permite que visitantes deixem o e-mail para receber ofertas.

## 👥 Integrantes

| Nome | RM |
|------|----|
| Victor Zocoler | 568234 |
| Douglas Taveira | 567846 |
| Wenderson Santos | 567847 |

## 🧩 Stack

- **Frontend:** React 19 + Vite + Tailwind CSS
- **Backend:** Node.js + Express (proxy da API para esconder a chave da Spoonacular)
- **API externa:** [Spoonacular](https://spoonacular.com/food-api) (`/recipes/random`)

## 📁 Estrutura

```
CP5-JS/
├── api/        # Backend Express — proxy da Spoonacular (esconde a API_KEY)
└── frontend/   # Aplicação React (Vite + Tailwind)
```

## 🚀 Como rodar localmente

### 1. Backend

```bash
cd api
npm install
cp .env.example .env   # edite .env e coloque sua API_KEY da Spoonacular
npm run dev            # sobe em http://localhost:3000
```

### 2. Frontend (em outro terminal)

```bash
cd frontend
npm install
npm run dev            # sobe em http://localhost:5173
```

O Vite faz proxy de `/api` para `http://localhost:3000`, então o frontend chama o backend sem expor a chave.

## ✨ Funcionalidades

- **Hero** com chamada principal e card de prato em destaque
- **Navbar fixa** que muda de transparente para branca ao rolar a página
- **Apresentação dos benefícios** do app (entrega, pagamento, variedade)
- **Cardápio dinâmico** carregado via `fetch` na API (com loading e tratamento de erro)
- **Depoimentos** de clientes
- **Formulário de contato** para captura de e-mail
- **Rodapé** com links de navegação
- **Responsivo** (mobile, tablet e desktop) usando Tailwind
- **Scroll suave** entre seções via âncoras

## 🌐 Deploy

> Link do deploy: _a preencher após publicação no Vercel_

## 📚 Disciplina

- **Curso:** Engenharia de Software — FIAP
- **Disciplina:** Web Development with JS
- **Professor:** Lucas Sousa
- **Entrega:** Check-Point 05