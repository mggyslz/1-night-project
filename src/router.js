import { renderLanding } from './components/landing/landing.js';
import { renderLogin } from './components/login/login.js';
import { renderRegister } from './components/register/register.js';
import { renderDashboard } from './components/dashboard/dashboard.js';

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
      render();
    } else {
      app.innerHTML = `<h2>404 - Page Not Found</h2>`;
    }
  }

  function attachLinkInterception() {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches('a[data-link]')) {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        history.pushState(null, '', path);
        navigate(path);
      }
    });
  }

  window.addEventListener('popstate', () => {
    navigate(location.pathname);
  });

  attachLinkInterception();
  navigate(location.pathname); // Initial load
}
