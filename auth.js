// Cria um objeto novo com todas as chaves em minúsculas para facilitar a busca
const usuariosLower = {
  "guilherme": "Guilherme12345",
  "alex": "Alex12345",
  "katlrin": "Katlrin12345",
  "eduarda": "Eduarda12345",
  "brayan": "Brayan12345",
  "maykon": "Maykon12345",
  "lucas": "Lucas12345",
  "osvaldo": "Osvaldo12345",
  "paulo": "Paulo12345",
  "fossile": "Fossile12345",
  "frigheto": "Frigheto12345",
  "deivison": "Deivison12345",
  "thiago": "Thiago12345",
  "hernane": "Hernane12345",
  "silvio": "Silvio12345",
  "anna": "Anna12345",
  "sérgio": "Sérgio12345",
  "joão": "João12345",
  "anderson": "Anderson12345",
  "kaleu": "Kaleu12345",
  "geison": "Geison12345",
  "peterson": "Peterson12345"
};

function login() {
  const usuarioInput = document.getElementById('usuario').value.trim().toLowerCase();
  const senhaInput = document.getElementById('senha').value.trim();
  const erro = document.getElementById('erro');

  if (usuariosLower[usuarioInput] && usuariosLower[usuarioInput] === senhaInput) {
    sessionStorage.setItem('logadoCamargo', 'sim');
    // Grava o usuário no formato original, com a primeira letra maiúscula (só um exemplo simples)
    sessionStorage.setItem('usuarioCamargo', usuarioInput.charAt(0).toUpperCase() + usuarioInput.slice(1));
    window.location.href = 'index.html';
  } else {
    erro.style.display = 'block';
  }
}
