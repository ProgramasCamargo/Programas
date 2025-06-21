// Remove acentos do texto
function removeAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const usuariosLower = {
  "guilherme": "12345",
  "alex": "12345",
  "katlrin": "12345",
  "eduarda": "12345",
  "brayan": "12345",
  "maykon": "12345",
  "lucas": "12345",
  "osvaldo": "12345",
  "paulo": "12345",
  "fossile": "12345",
  "frigheto": "12345",
  "deivison": "12345",
  "thiago": "12345",
  "hernane": "12345",
  "silvio": "12345",
  "anna": "12345",
  "sergio": "12345",  // sem acento
  "joao": "12345",     // senha com acento, ok
  "anderson": "12345",
  "kaleu": "12345",
  "michael": "12345",
  "geison": "12345",
  "jhony": "12345",
  "patrick": "12345",
  "peterson": "12345"
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
