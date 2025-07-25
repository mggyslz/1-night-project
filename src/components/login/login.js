import { sql } from '../../db.js';

export function renderLogin() {
    const html = `
    <form id="login-form">
      <h2>Log In</h2>
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Log In</button>
      <p>Don't have an account? <a href="/register" data-link>Sign Up</a></p>
    </form>
  `;

    document.getElementById('app').innerHTML = html;

    const form = document.getElementById('login-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        try {
            // Await the query for the matching email
            const result = await sql`SELECT * FROM users WHERE email = ${email}`;

            if (!result || result.length === 0) {
                alert('Invalid email or password');
                return;
            }

            const user = result[0];

            // Make sure we wait and validate securely (passwords should be hashed in real apps)
            const passwordsMatch = user.password === password;

            if (passwordsMatch) {
                alert('Login successful!');
                history.pushState(null, '', '/dashboard');
                window.dispatchEvent(new PopStateEvent('popstate'));
            } else {
                alert('Invalid email or password');
            }

        } catch (err) {
            console.error('Login error:', err);
            alert('Something went wrong. Please try again.');
        }
    });
}
