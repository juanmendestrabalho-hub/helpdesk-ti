function loginView() {
  return `
    <div class="container">
      <h2>Login</h2>
      <input id="user" placeholder="Usuário">
      <input id="pass" type="password" placeholder="Senha">
      <button onclick="login()">Entrar</button>
    </div>
  `;
}

function login() {
  const user = document.getElementById("user").value;

  if (!user) return alert("Digite usuário");

  localStorage.setItem("user", user);
  loadDashboard();
}

function logout() {
  localStorage.removeItem("user");
  location.reload();
}
