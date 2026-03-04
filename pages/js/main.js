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
  // Count how many segments we need to go up from current file to repo root.
  // All HTML files live inside /pages/ so we always go up one level.
  const segments = path.replace(/\/[^/]*$/, ''); // remove filename
  // If served from /pages/ we need to go up one directory.
  return '..';
}

document.addEventListener('DOMContentLoaded', setActiveNav);
