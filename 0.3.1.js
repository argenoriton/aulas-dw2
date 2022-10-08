const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

const filmesNome = filmes.map((filme) => {
  return {
    nome: filme.nome,
    lancamento: filme.lancamento,
  };
});

let id = 0;

const IDFilmes = filmesNome.map((filmeID) => {
  let idAtual = id;
  id++;
  return {
    nome: filmeID.nome,
    lancamento: filmeID.lancamento,
    idAtual,
  };
});

console.log(filmesNome);
console.log(IDFilmes);
