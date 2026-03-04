# IT-214 — Mobilidade Aérea Urbana

Repositório da disciplina **IT-214 — Mobilidade Aérea Urbana** do [Instituto Tecnológico de Aeronáutica (ITA)](https://www.ita.br/).

A disciplina aborda o ecossistema da Mobilidade Aérea Avançada (AAM), incluindo UAM, Rural Air Mobility e RAM, com foco em aeronaves eVTOL, infraestrutura de vertiportos e regulação aeronáutica.

---

## 👥 Integrantes do Grupo

| Nome | Instituição |
|------|-------------|
| Jaqueline Rodrigues | ITA — IT-214 |
| Luiz Tozi | ITA — IT-214 |
| Tariq Lopes | ITA — IT-214 |
| Gabriel Rufino | ITA — IT-214 |

---

## 🌐 GitHub Pages

O site é publicado automaticamente em cada push para a branch `main`:

> **[https://biellgg14.github.io/IT-214/](https://biellgg14.github.io/IT-214/)**

---

## 📁 Estrutura de Pastas

```
IT-214/
├── docs/
│   ├── Atividade01.md   ← Introdução à AAM (conteúdo completo)
│   ├── Atividade02.md   ← template
│   ├── ...
│   └── Atividade10.md   ← template
├── pages/
│   ├── index.html       ← página inicial (introdução + equipe)
│   ├── atividades.html  ← grid com as 10 atividades
│   ├── atividade.html   ← template dinâmico de visualização
│   ├── css/
│   │   └── style.css    ← design ITA-themed (azul #1a2e4a + laranja #e8601c)
│   └── js/
│       ├── main.js      ← utilitários compartilhados (navbar, basePath)
│       └── render.js    ← renderiza Markdown com marked.js
├── .github/
│   └── workflows/
│       └── deploy.yml   ← CI/CD: deploy automático para GitHub Pages
└── README.md
```

---

## 🚀 Como Rodar Localmente

### Opção 1 — VS Code Live Server (recomendado)

1. Abra a pasta do repositório no VS Code.
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `pages/index.html` → **"Open with Live Server"**.
4. O site abrirá em `http://127.0.0.1:5500/pages/index.html`.

### Opção 2 — Python HTTP Server

```bash
# Na raiz do repositório
python3 -m http.server 8080
# Acesse: http://localhost:8080/pages/index.html
```

### Opção 3 — Node.js serve

```bash
npx serve .
# Acesse: http://localhost:3000/pages/index.html
```

> **Importante:** O site usa `fetch()` para carregar os arquivos `.md`, por isso precisa ser servido via HTTP — não funciona abrindo o arquivo diretamente com `file://` no navegador.

---

## ✏️ Como Adicionar Conteúdo

1. Edite o arquivo correspondente em `docs/`:

   ```bash
   # Exemplo: adicionar conteúdo à Atividade 02
   nano docs/Atividade02.md
   ```

2. Faça commit e push para a branch `main`:

   ```bash
   git add docs/Atividade02.md
   git commit -m "feat: preenche Atividade 02"
   git push origin main
   ```

3. O GitHub Action detecta a mudança e **reconstrói e publica o site automaticamente** em poucos minutos.

4. O card da Atividade 02 na página de atividades mudará automaticamente de **"Em breve"** para **"Disponível"**.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|-----|
| HTML5 / CSS3 / JavaScript ES2020 | Frontend sem framework |
| [marked.js](https://marked.js.org/) (CDN) | Renderização de Markdown |
| [highlight.js](https://highlightjs.org/) (CDN) | Syntax highlighting |
| [Google Fonts](https://fonts.google.com/) — Inter + Roboto Mono | Tipografia |
| GitHub Actions | CI/CD deploy automático |
| GitHub Pages | Hospedagem estática |

---

## 📋 Requisitos Técnicos

- ✅ **Sem backend** — apenas HTML, CSS e JavaScript puro
- ✅ **Sem build step** — sem npm, webpack ou transpiladores
- ✅ Caminhos relativos compatíveis com GitHub Pages
- ✅ Layout responsivo (mobile-first)
- ✅ Deploy automático via GitHub Actions
