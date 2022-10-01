const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costana',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];

const apresentacaoMedicos = medicos.forEach((apresentacao) => {
  if (apresentacao.genero === 'masculino') {
    let apresentacoes =
      'Dr ' + apresentacao.nome + ' ' + apresentacao.sobrenome;
    console.log(apresentacoes);
  } else if (apresentacao.genero === 'feminino') {
    let apresentacoes =
      'Dr(a) ' + apresentacao.nome + ' ' + apresentacao.sobrenome;
    console.log(apresentacoes);
  } else {
    let apresentacoes =
      'Dr(e) ' + apresentacao.nome + ' ' + apresentacao.sobrenome;
    console.log(apresentacoes);
  }
});
