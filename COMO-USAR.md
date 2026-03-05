# 📖 Como Visualizar suas Atividades

## ✨ Sistema de Renderização Automática

Seu projeto está configurado para renderizar arquivos **Markdown** em páginas **HTML** automaticamente!

### 🔄 Fluxo de Trabalho

1. **Edite o arquivo Markdown**
   - Abra `docs/Atividade01.md` (ou qualquer Atividade0X.md)
   - Faça suas edições e salve (`Ctrl+S`)

2. **Visualize a mudança**
   - Abra seu navegador em `pages/atividade.html?id=01`
   - Atualize a página (`F5` ou `Ctrl+R`) para ver as mudanças
   - O conteúdo do Markdown será renderizado automaticamente

3. **Navegue entre atividades**
   - Use `pages/atividades.html` para ver a lista de todas as atividades
   - Clique em qualquer atividade para visualizá-la
   - Use os botões de navegação para ir para a próxima/anterior

---

## 🚀 Dica: Use Live Server para Auto-Refresh

Para não precisar atualizar manualmente a página a cada mudança, use a extensão **Live Server** do VS Code:

1. Instale a extensão "Live Server" no VS Code
2. Clique com direito em `pages/atividade.html?id=01` → "Open with Live Server"
3. A página será aberta em `http://localhost:5500/pages/atividade.html`
4. A página atualiza **automaticamente** sempre que você salva um arquivo!

> **Dica:** O Live Server funciona tanto para arquivos HTML quanto Markdown!

---

## 📝 Estrutura de Arquivos

```
docs/
  ├── Atividade01.md    ← Edite aqui
  ├── Atividade02.md
  ├── ...
  └── Atividade10.md

pages/
  ├── index.html             ← Página inicial
  ├── atividades.html        ← Lista de atividades
  ├── atividade.html         ← Visualizador de atividade individual
  ├── css/
  ├── js/
  │   ├── main.js            ← Scripts compartilhados
  │   └── render.js          ← Renderizador Markdown
  └── ...
```

---

## 🔗 URLs Rápidas

- **Página Inicial:** `pages/index.html`
- **Lista de Atividades:** `pages/atividades.html`
- **Atividade 01:** `pages/atividade.html?id=01`
- **Atividade 02:** `pages/atividade.html?id=02`
- **Atividade 10:** `pages/atividade.html?id=10`

---

## 💡 Recursos Suportados no Markdown

O sistema usa **marked.js** e **highlight.js**, então você pode usar:

- ✅ Títulos (`#`, `##`, `###`, etc.)
- ✅ Listas (ordenadas e desordenadas)
- ✅ **Negrito** e *itálico*
- ✅ Blocos de código com syntax highlighting
- ✅ Tabelas (GitHub Flavored Markdown)
- ✅ Links e imagens
- ✅ Citações (blockquotes)
- ✅ Linhas horizontais

**Exemplo:**
```markdown
# Título Principal

## Subtítulo

Parágrafo normal com **negrito** e *itálico*.

```python
def hello():
    print("Hello, World!")
```

| Coluna 1 | Coluna 2 |
|----------|----------|
| Valor 1  | Valor 2  |
```

---

## 🎯 Próximos Passos

1. Abra `docs/Atividade01.md` e veja o conteúdo
2. Acesse `pages/atividade.html?id=01` no navegador
3. Experimente editar o arquivo e adicionar conteúdo
4. Atualize o navegador para ver as mudanças
5. (Opcional) Instale Live Server para auto-refresh

---

## ❓ Dúvidas?

Se a página mostrar "Esta atividade ainda não foi publicada", significa que o arquivo Markdown está vazio ou tem menos de 50 caracteres. Adicione conteúdo ao arquivo para que aprareça na página!

**Bom trabalho! 🚀**
