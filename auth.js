// auth.js

const usuariosAtivos = {
  "Guilherme": "Guilherme12345",
  "Alex": "Alex12345",
  "Katlrin": "Katlrin12345",
  "Eduarda": "Eduarda12345",
  "Brayan": "Brayan12345",
  "Maykon": "Maykon12345",
  "Lucas": "Lucas12345",
  "Osvaldo": "Osvaldo12345",
  "Paulo": "Paulo12345",
  "Fossile": "Fossile12345",
  "Frigheto": "Frigheto12345",
  "Deivison": "Deivison12345",
  "Thiago": "Thiago12345",
  "Hernane": "Hernane12345",
  "Silvio": "Silvio12345",
  "Anna": "Anna12345",
  "Sergio": "Sergio12345",
  "Joao": "Joao12345",
  "Anderson": "Anderson12345",
  "Kaleu": "Kaleu12345",
  "Geison": "Geison12345",
  "Peterson": "Peterson12345"
};

function autenticar(usuario, senha) {
  return usuariosAtivos[usuario] && usuariosAtivos[usuario] === senha;
}
