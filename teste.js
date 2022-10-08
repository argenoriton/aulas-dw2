const pessoas = [
  {
    nome: 'João',
    diaNascimento: '2002-12-12',
    cidades: ['porto alegre'],
    premium: true,
  },
  {
    nome: 'Felipe',
    diaNascimento: '2004-01-28',
    cidades: ['porto alegre'],
    premium: false,
  },
];

const resultado = pessoas.map((pessoa) => {
  let cor = 'branco';
  if (pessoa.premium) {
    cor = 'dourado';
  }
  return { diaNascimento: pessoa.diaNascimento, cor };
});

console.log(resultado);
