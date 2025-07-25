export function Sidebar() {
  return `
    <div class="sidebar" id="sidebar">
      <div class="d-flex align-items-center justify-content-between p-3">
        <div class="d-flex align-items-center">
          <i class="bi bi-shield-lock logo-icon" style="font-size: 1.8rem;"></i>
          <span class="logo-text ms-2 fw-bold fs-5">SmartVote</span>
        </div>
        <button class="toggle-btn" id="toggleSidebar">
          <i class="bi bi-list"></i>
        </button>
      </div>
      <div class="mt-3">
        <a href="#" class="active"><i class="bi bi-speedometer2"></i><span class="nav-text">Dashboard</span></a>
        <a href="#"><i class="bi bi-clipboard-check"></i><span class="nav-text">Elections</span></a>
        <a href="#"><i class="bi bi-people"></i><span class="nav-text">Voters</span></a>
        <a href="#"><i class="bi bi-bar-chart"></i><span class="nav-text">Results</span></a>
        <a href="#"><i class="bi bi-gear"></i><span class="nav-text">Settings</span></a>
        <a href="#"><i class="bi bi-question-circle"></i><span class="nav-text">Help</span></a>
      </div>
      <div class="mt-auto user-profile">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Admin">
        <div class="user-info">
          <span class="user-name">Admin User</span>
          <span class="user-role">Administrator</span>
        </div>
      </div>
    </div>
  `;
}
