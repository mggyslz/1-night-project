import { Sidebar } from './components/Sidebar.js';
import './style.css';
import { router } from './router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

document.querySelector('#app').innerHTML = `
  <div class="app-layout">
    ${Sidebar()}
    <main id="view" class="main-content"></main>
  </div>
`;

// window.addEventListener('hashchange', router);
// window.addEventListener('load', router);
