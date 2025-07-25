import { Sidebar } from './components/Sidebar.js';
import './style.css'; // Assuming you have a styles.css for your styles
import { router } from './router.js';

document.querySelector('#app').innerHTML = `
  <div class="app-layout">
    ${Sidebar()}
    <main id="view" class="main-content"></main>
  </div>
`;

// window.addEventListener('hashchange', router);
// window.addEventListener('load', router);
