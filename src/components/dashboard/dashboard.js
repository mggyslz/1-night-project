export function renderDashboard() {
    document.getElementById('app').innerHTML = `
    <h2>Dashboard</h2>
    <p>Welcome to your dashboard!</p>
    <a href="/public" data-link>Go Home</a>
  `;
}
