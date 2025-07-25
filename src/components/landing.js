import '../../public/landing/landing.css'
export function renderLanding() {
    document.getElementById('app').innerHTML = `
    <h1>Welcome to the Landing Page</h1>
    <a href="/login" data-link>Login</a> |
    <a href="/register" data-link>Register</a>
  `;
}
