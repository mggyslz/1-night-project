export async function renderLanding() {
    // Load HTML template as text
    const res = await fetch('/landing/landing.html');
    const html = await res.text();

    const app = document.getElementById('app');
    app.innerHTML = html;

    // Inject CSS if not already added
    if (!document.querySelector('link[href="/landing/landing.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/landing/landing.css';
        document.head.appendChild(link);
    }

    // Wait for next frame so DOM elements are ready
    await new Promise(requestAnimationFrame);

    // Optional: attach any interactivity
}
