export async function renderDashboard() {
    // Fetch dashboard HTML
    const res = await fetch('/dashboard/dashboard.html');
    const html = await res.text();

    // Insert into the app container
    const app = document.getElementById('app');
    app.innerHTML = html;

    // Dynamically attach CSS if not already present
    if (!document.querySelector('link[href="/dashboard/dashboard.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/dashboard/dashboard.css';
        document.head.appendChild(link);
    }

    // Wait for the next frame to ensure DOM is fully rendered
    await new Promise(requestAnimationFrame);

    // Dashboard currently has no forms, but you may add JS here in future
}
