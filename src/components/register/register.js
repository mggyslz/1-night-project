export function renderRegister() {
    document.getElementById('app').innerHTML = `
    <h2>Register Page</h2>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p><a href="/login" data-link>Already have an account? Login</a></p>
  `;
}
