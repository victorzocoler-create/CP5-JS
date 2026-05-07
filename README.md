# 🍔 GourmetOn — Landing Page

Landing page do app de delivery **GourmetOn**, desenvolvida como entrega do **Check-Point 05** da disciplina de *Web Development with JS* (FIAP).

A página apresenta o aplicativo, lista um cardápio dinâmico carregado da [Spoonacular API](https://spoonacular.com/food-api) e permite que visitantes deixem o e-mail para receber ofertas.

## 👥 Integrantes

| Nome | RM |
|------|----|
| Victor Zocoler | 568234 |
| Douglas Taveira | 567846 |
| Wenderson Santos | 567847 |
| Guilherme Pereira | 567487 |

## 🧩 Stack

- **Frontend:** React 19 + Vite + Tailwind CSS
- **Backend:** Node.js + Express (proxy da API para esconder a chave da Spoonacular)
- **API externa:** [Spoonacular](https://spoonacular.com/food-api) (`/recipes/random`)

## 🚀 Como rodar localmente

Agora você pode rodar todo o projeto (Frontend + API) de forma simplificada a partir da raiz:

### 1. Configuração Inicial
Certifique-se de estar na pasta raiz do projeto (`CP5-JS`) e instale todas as dependências:

```bash
npm run install:all
```

### 2. Configuração da API
Vá até a pasta `api/`, crie o arquivo `.env` e adicione sua chave:
```bash
cd api
cp .env.example .env   # edite .env e coloque sua API_KEY da Spoonacular
cd ..
```

### 3. Execução
Execute o comando abaixo na raiz para subir o Frontend e o Backend simultaneamente:

```bash
npm run dev
```

- **Frontend:** `http://localhost:5173`
- **Backend (API):** `http://localhost:3000`

---

## 📁 Estrutura

```
CP5-JS/
├── api/        # Backend Express (Proxy)
├── frontend/   # Aplicação React (Vite + Tailwind)
└── package.json # Scripts de automação do projeto completo
```

## ✨ Funcionalidades

- **Hero** com chamada principal, imagem de fundo e card de prato em destaque
- **Navbar fixa** que muda de transparente para branca ao rolar a página
- **Apresentação dos benefícios** do app (entrega, pagamento, variedade)
- **Busca e Filtros** destacados na seção de funcionalidades
- **Cardápio dinâmico** carregado via `fetch` na API (com loading e tratamento de erro)
- **Depoimentos** de clientes
- **Formulário de contato** para captura de e-mail
- **Rodapé completo** com contato, redes sociais e termos de uso
- **Responsivo** (mobile, tablet e desktop) usando Tailwind
- **Scroll suave** entre seções via âncoras

## 🌐 Deploy

> Link do deploy: _a preencher após publicação no Vercel_

## 📚 Disciplina

- **Curso:** Engenharia de Software — FIAP
- **Disciplina:** Web Development with JS
- **Professor:** Lucas Sousa
- **Entrega:** Check-Point 05
