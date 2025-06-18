// auth.js

const usuariosAtivos = {
  "Joao_emmenderfer": "51235asd",
  "maria": "abcd"
};

function autenticar(usuario, senha) {
  return usuariosAtivos[usuario] && usuariosAtivos[usuario] === senha;
}
