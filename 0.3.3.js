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

const apresentacaoMedicos = medicos.forEach((medico) => {
  if (medicos.genero === 'masculino') {
    let apresentacoes = 'Dr ' + medicos.nome + ' ' + medicos.sobrenome;
    console.log(apresentacoes);
  } else if (medicos.genero === 'feminino') {
    let apresentacoes = 'Dr(a) ' + medicos.nome + ' ' + medicos.sobrenome;
    console.log(apresentacoes);
  } else (medicos.genero === 'não-binario'){
    let apresentacoes = 'Dr(e) ' + medicos.nome + ' ' + medicos.sobrenome;
    console.log(apresentacoes);
  }
});
