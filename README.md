# 🍔 GourmetOn — Landing Page

Landing page do app de delivery **GourmetOn**, desenvolvida como entrega do **Check-Point 05** da disciplina de *Web Development with JS* (FIAP).

A página apresenta o aplicativo, lista um cardápio dinâmico carregado da [Spoonacular API](https://spoonacular.com/food-api) e permite que visitantes deixem o e-mail para receber ofertas.

## 🌐 Deploy

🔗 **Acesse a versão publicada:** [https://cp-5-js.vercel.app/](https://cp-5-js.vercel.app/)

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
- **API externa:** [Spoonacular](https://spoonacular.com/food-api) — endpoint `/recipes/random`
- **Deploy:** Vercel (frontend estático + função serverless para o backend)

## 📁 Estrutura do projeto

```
CP5-JS/
├── api/                  # Backend Express (proxy da Spoonacular)
│   ├── index.js          # Rota /api/comidas
│   ├── .env.example      # Modelo das variáveis de ambiente
│   └── package.json
├── frontend/             # Aplicação React (Vite + Tailwind)
│   ├── src/
│   ├── index.html
│   └── vite.config.js    # Proxy /api -> http://localhost:3000
├── vercel.json           # Configuração de deploy
└── package.json          # Scripts de orquestração (raiz)
```

---

## 🚀 Como rodar localmente

### ✅ Pré-requisitos

- **Node.js 18+** (recomendado 20+) — necessário pelo `fetch` nativo usado no backend
- **npm 9+**
- Uma **API Key gratuita** da Spoonacular: crie em [spoonacular.com/food-api/console](https://spoonacular.com/food-api/console#Dashboard)

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/<seu-usuario>/CP5-JS.git
cd CP5-JS
```

### 2️⃣ Instalar todas as dependências

A partir da **raiz** do projeto:

```bash
npm run install:all
```

Esse comando instala as dependências da raiz, do `frontend/` e do `api/` em sequência.

### 3️⃣ Configurar a variável de ambiente da API

```bash
cd api
cp .env.example .env
```

Abra o arquivo `api/.env` que acabou de ser criado e preencha sua chave da Spoonacular:

```env
API_KEY=sua_chave_spoonacular_aqui
PORT=3000
```

> ⚠️ **Importante:** o arquivo `.env` está no `.gitignore` e **nunca** deve ser comitado. Ele contém segredos.

Volte para a raiz:

```bash
cd ..
```

### 4️⃣ Rodar o projeto (frontend + backend juntos)

Na **raiz** do projeto:

```bash
npm run dev
```

Esse script usa o `concurrently` para subir os dois servidores ao mesmo tempo:

| Serviço   | URL                           |
|-----------|-------------------------------|
| Frontend  | http://localhost:5173         |
| Backend   | http://localhost:3000         |
| Endpoint  | http://localhost:3000/api/comidas |

O Vite já está configurado para fazer proxy de `/api/*` para o backend (`vite.config.js`), então o frontend chama `/api/comidas` sem precisar saber a URL absoluta.

---

## 🛠️ Scripts disponíveis

Todos os comandos abaixo devem ser executados na **raiz** do projeto:

| Comando              | O que faz                                                         |
|----------------------|-------------------------------------------------------------------|
| `npm run install:all`| Instala dependências da raiz, do `frontend/` e do `api/`          |
| `npm run dev`        | Sobe frontend (Vite) e backend (Express) em paralelo              |
| `npm run build`      | Gera o build de produção do frontend e move para a pasta `dist/`  |
| `npm start`          | Inicia apenas o backend (`api/index.js`)                          |

---

## 🧪 Testando manualmente o backend

Com o backend rodando, abra outro terminal e execute:

```bash
curl http://localhost:3000/api/comidas?number=3
```

Você deve receber um JSON com 3 receitas aleatórias da Spoonacular. Se aparecer `"API_KEY não configurada no servidor."`, significa que o `.env` não foi criado corretamente.

---

## ☁️ Deploy na Vercel

O projeto já vem configurado para deploy automático na Vercel via `vercel.json`:

- O frontend é buildado e servido estaticamente a partir de `dist/`
- O backend (`api/index.js`) roda como **função serverless** sob `/api/*`
- Em produção, a variável `API_KEY` deve ser configurada em **Project Settings → Environment Variables** no painel da Vercel (não use o `.env` em produção)

🔗 Versão publicada: **[https://cp-5-js.vercel.app/](https://cp-5-js.vercel.app/)**

---

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

---

## 🩺 Solução de problemas

| Problema                                              | Causa provável / solução                                                                 |
|-------------------------------------------------------|------------------------------------------------------------------------------------------|
| `API_KEY não configurada no servidor.`                | Crie o `api/.env` a partir do `.env.example` e preencha sua chave                         |
| `Spoonacular respondeu 401`                           | A `API_KEY` é inválida — gere uma nova em spoonacular.com                                 |
| `Spoonacular respondeu 402`                           | A cota gratuita do dia foi atingida — espere 24h ou use outra chave                       |
| Porta `3000` ou `5173` em uso                         | Encerre o processo que está usando, ou troque a `PORT` no `.env` da API                    |
| `fetch is not defined` ao subir o backend             | Atualize o Node.js para versão **18+**                                                    |
| Frontend chama `/api/comidas` e dá 404 em dev         | Confirme que o backend está rodando em `http://localhost:3000` (proxy do Vite)            |

---

## 📚 Disciplina

- **Curso:** Engenharia de Software — FIAP
- **Disciplina:** Web Development with JS
- **Professor:** Lucas Sousa
- **Entrega:** Check-Point 05
