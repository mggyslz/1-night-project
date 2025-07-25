import { sql } from '../db.js';

export async function renderRegister() {
    // Fetch and inject HTML
    const res = await fetch('/register/register.html');
    const html = await res.text();
    const app = document.getElementById('app');
    app.innerHTML = html;

    // ✅ Dynamically load CSS (if not already present)
    if (!document.querySelector('link[href="/register/register.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'register/register.css';
        document.head.appendChild(link);
    }

    // ✅ Wait for DOM to finish rendering the injected HTML
    await new Promise(requestAnimationFrame); // allows DOM paint cycle

    // Now it's safe to access form elements
    const form = document.getElementById('register-form');
    if (!form) {
        console.error("Register form not found in DOM");
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (!name || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const exists = await sql`SELECT 1 FROM users WHERE email = ${email}`;
            if (exists.length > 0) {
                alert('Email already exists.');
                return;
            }

            await sql`
                INSERT INTO users (name, email, password)
                VALUES (${name}, ${email}, ${password})
            `;

            alert('Registered successfully!');
            history.pushState(null, '', '/login');
            window.dispatchEvent(new PopStateEvent('popstate'));

        } catch (err) {
            console.error('Registration error:', err);
            alert('Something went wrong.');
        }
    });
}
