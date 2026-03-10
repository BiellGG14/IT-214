/**
 * render.js — IT-214 Mobilidade Aérea Urbana
 * Handles fetching and rendering Markdown files using marked.js.
 */

/**
 * Fetch and render a Markdown file into a target DOM element.
 *
 * @param {string}      mdPath   - Path to the .md file (relative to repo root)
 * @param {HTMLElement} target   - Element where rendered HTML will be injected
 * @param {Object}      [opts]
 * @param {Function}    [opts.onSuccess] - Called with the raw markdown text on success
 * @param {Function}    [opts.onEmpty]   - Called when file exists but has no meaningful content
 * @param {Function}    [opts.onError]   - Called when the file cannot be fetched
 */
async function renderMarkdown(mdPath, target, opts = {}) {
  target.innerHTML = `<div class="loading"><div class="spinner"></div> Carregando…</div>`;

  try {
    const res = await fetch(mdPath);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const text = await res.text();

    // Check if the file has meaningful content beyond the template placeholder
    const stripped = text.replace(/>\s*_Conteúdo a ser preenchido_/g, '').trim();
    const hasContent = stripped.length > 50;

    if (!hasContent) {
      renderNotPublished(target);
      if (opts.onEmpty) opts.onEmpty();
      return;
    }

    // Configure marked for safe rendering
    marked.setOptions({
      breaks: true,
      gfm: true,
    });

    target.innerHTML = marked.parse(text);

    // Resolve relative URLs using the Markdown file location as base.
    const mdUrl = new URL(mdPath, window.location.href);
    const basePath = (typeof getBasePath === 'function') ? getBasePath() : '';
    const isRelativeUrl = (value) => value && !/^(?:[a-z]+:|\/\/|#|\/)/i.test(value);

    target.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src');
      if (!src) {
        return;
      }

      if (src.startsWith('../pages/img/')) {
        const fileName = src.split('/').pop();
        img.src = `${basePath}/pages/img/${fileName}`;
      } else if (isRelativeUrl(src)) {
        img.src = new URL(src, mdUrl).href;
      }

      // Fallback when a relative image still fails to load in GitHub Pages.
      img.addEventListener('error', () => {
        const current = img.getAttribute('src') || '';
        const fileName = current.split('/').pop();
        if (fileName) {
          img.src = `${basePath}/pages/img/${fileName}`;
        }
      }, { once: true });
    });

    target.querySelectorAll('a').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (isRelativeUrl(href)) {
        anchor.href = new URL(href, mdUrl).href;
      }
    });

    target.classList.add('markdown-body');

    // Apply highlight.js if available
    if (window.hljs) {
      target.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
      });
    }

    if (opts.onSuccess) opts.onSuccess(text);

  } catch (err) {
    renderNotPublished(target);
    if (opts.onError) opts.onError(err);
  }
}

/**
 * Check whether a docs/AtividadeXX.md file exists and has real content.
 *
 * @param {string}   mdPath  - Path to the .md file
 * @param {Function} cb      - Callback: cb(true) if available, cb(false) otherwise
 */
async function checkAvailability(mdPath, cb) {
  try {
    const full = await fetch(mdPath);
    if (!full.ok) { cb(false); return; }
    const text = await full.text();
    const stripped = text.replace(/>\s*_Conteúdo a ser preenchido_/g, '').trim();
    cb(stripped.length > 50);
  } catch {
    cb(false);
  }
}

/**
 * Render the "not published" placeholder.
 */
function renderNotPublished(target) {
  target.classList.remove('markdown-body');
  target.innerHTML = `
    <div class="not-published">
      <div class="not-published__icon">📄</div>
      <div class="not-published__title">Esta atividade ainda não foi publicada.</div>
      <p>O conteúdo estará disponível em breve.</p>
    </div>`;
}
