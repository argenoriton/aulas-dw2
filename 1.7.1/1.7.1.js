import '.styles.css';

const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    oscar: true,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    oscar: true,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    oscar: true,
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
  {
    nome: 'Meninas Malvadas',
    oscar: false,
    lancamento: 2004,
    diretores: ['Mark Waters'],
    generos: ['Comédia'],
  },
];

function DiretoresParaExibir(props) {
  const { diretores } = props;
  return (
    <ul>
      {diretores.map((diretor) => (
        <li>{diretor}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const filmesParaExibir = filmes.map((filme) => {
    const { nome, diretores } = filme;
    return {
      nome,
      diretores,
    };
  });
  return (
    <div className="App">
      {filmesParaExibir.map((filme) => (
        <div>
          <h1> {filme.nome}</h1>
          <p>Diretores:</p>
          <DiretoresParaExibir diretores={filme.diretores} />
        </div>
      ))}
    </div>
  );
}
