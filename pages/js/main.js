/**
 * main.js — IT-214 Mobilidade Aérea Urbana
 * Shared utilities used across all pages.
 */

/**
 * Mark the active nav link based on current page filename.
 */
function setActiveNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__nav a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) {
      link.classList.add('active');
    }
  });
}

/**
 * Resolve the base path so fetches work both on localhost and GitHub Pages.
 * On GitHub Pages the repo is served under /<repo-name>/, so we walk up
 * from the current page's directory to the repo root.
 *
 * pages/index.html      → base = ".."    (one level up)
 * pages/atividade.html  → base = ".."
 */
function getBasePath() {
  const path = location.pathname;
  // Detect GitHub Pages: contains "/IT-214/"
  if (path.includes('/IT-214/')) {
    // Extract the repo root path
    const match = path.match(/^(.*?\/IT-214)/);
    if (match) {
      return match[1]; // Returns "/IT-214" or similar
    }
  }
  // For local development, pages are in /pages/ so go up one level
  return '..';
}

document.addEventListener('DOMContentLoaded', setActiveNav);
