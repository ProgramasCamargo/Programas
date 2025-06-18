function removeAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const usuariosLower = {
  "Corretor": "corretor",
  "ADM": "ADM",
  // adicione os outros usuários aqui
};

function login() {
  let usuarioInput = document.getElementById('usuario').value.trim().toLowerCase();
  usuarioInput = removeAcentos(usuarioInput);
  const senhaInput = document.getElementById('senha').value.trim();
  const erro = document.getElementById('erro');

  if (usuariosLower[usuarioInput] && usuariosLower[usuarioInput] === senhaInput) {
    sessionStorage.setItem('logadoCamargo', 'sim');
    sessionStorage.setItem('usuarioCamargo', usuarioInput.charAt(0).toUpperCase() + usuarioInput.slice(1));
    window.location.href = 'index.html';
  } else {
    erro.style.display = 'block';
  }
}
