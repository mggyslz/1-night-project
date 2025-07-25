// import { Dashboard } from './components/Dashboard.js';
// import { Elections } from './components/Elections.js';
// import { Voters } from './components/Voters.js';
// import { Results } from './components/Results.js';
// import { Settings } from './components/Settings.js';
// import { Help } from './components/Help.js';

const routes = {
//   '#/dashboard': Dashboard,
//   '#/elections': Elections,
//   '#/voters': Voters,
//   '#/results': Results,
//   '#/settings': Settings,
//   '#/help': Help,
};

export function router() {
  const route = window.location.hash || '#/dashboard';
  const view = routes[route];

  if (view) {
    document.querySelector('#view').innerHTML = view();
  } else {
    document.querySelector('#view').innerHTML = `<h2>404 - Page Not Found</h2>`;
  }
}
