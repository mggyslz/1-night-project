import { sql } from '../db.js';
export async function renderLogin() {
    const res = await fetch('/login/login.html');
    const html = await res.text();
    const app = document.getElementById('app');
    app.innerHTML = html;

    // ✅ Dynamically load CSS (if not already present)
    if (!document.querySelector('link[href="/login/login.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'login/login.css';
        document.head.appendChild(link);
    }

    // ✅ Wait for DOM to finish rendering the injected HTML
    await new Promise(requestAnimationFrame); // allows DOM paint cycle

    const form = document.getElementById('login-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        try {
            // Await the query for the matching email
            const result = await sql`SELECT *
                                     FROM users
                                     WHERE email = ${email}`;

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
