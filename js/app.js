const app = document.getElementById("app");

function render(view) {
  app.innerHTML = view;
}

function navbar() {
  return `
    <div class="navbar">
      <button onclick="loadDashboard()">Dashboard</button>
      <button onclick="loadChamados()">Chamados</button>
      <button onclick="loadMaquinas()">Máquinas</button>
      <button onclick="logout()">Sair</button>
    </div>
  `;
}

function checkAuth() {
  const user = localStorage.getItem("user");
  if (!user) {
    render(loginView());
  } else {
    loadDashboard();
  }
}

checkAuth();
