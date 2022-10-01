const tarefas = [
  {
    titulo: 'Assistir Netflix',
    concluida: false,
    dias: 20,
  },
  {
    titulo: 'Tomar Chimarrão',
    concluida: true,
    dias: 15,
  },
  {
    titulo: 'Curtir uma Praia',
    concluida: true,
    dias: 60,
  },
  {
    titulo: 'Assistir Amazon',
    concluida: true,
    dias: 10,
  },
  {
    titulo: 'Tomar Tereré',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Curtir uma Festa',
    concluida: false,
    dias: 48,
  },
];

function concluidas() {
  return tarefas.filter(({ concluida }) => concluida === true);
}

function naoConcluidas() {
  return tarefas.filter(({ concluida }) => concluida === false);
}

function menos30dias() {
  return tarefas
    .filter(({ concluida }) => concluida === true)
    .filter(({ dias }) => dias < 30);
}

console.log(concluidas());
console.log(naoConcluidas());
console.log(menos30dias());
