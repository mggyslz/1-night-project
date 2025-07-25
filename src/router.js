// router.js
import { renderLanding } from './components/landing.js';
import { renderLogin } from './components/login.js';
import { renderRegister } from './components/register.js';
import { renderDashboard } from './components/dashboard.js';

const routes = {
  '/': renderLanding,
  '/login': renderLogin,
  '/register': renderRegister,
  '/dashboard': renderDashboard,
};

export function initRouter() {
  const app = document.getElementById('app');

  async function navigate(path) {
    const render = routes[path];
    if (render) {
      await render(); // in case the component is async (e.g., fetches HTML/CSS)
    } else {
      app.innerHTML = `<h2>404 - Page Not Found</h2>`;
    }
  }

  function attachLinkInterception() {
    document.body.addEventListener('click', (e) => {
      const target = e.target.closest('a[data-link]');
      if (target) {
        e.preventDefault();
        const path = target.getAttribute('href');
        history.pushState(null, '', path);
        navigate(path);
      }
    });
  }

  window.addEventListener('popstate', () => {
    navigate(location.pathname);
  });

  attachLinkInterception();
  navigate(location.pathname); // Load current route on page load
}
