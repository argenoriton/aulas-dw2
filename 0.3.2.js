const tarefas = [
  {
    titulo: 'Assistir Netflix',
    concluida: false,
    dias: 20,
  },
  {
    titulo: 'Tomar Chimarrão',
    concluida: false,
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
    concluida: true,
    dias: 48,
  },
];

const concluidas = tarefas.filter(({ concluida }) => concluida === true);
console.log(concluidas);

const naoConcluidas = tarefas.filter(({ concluida }) => concluida === false);
console.log(naoConcluidas);

const menos30dias = concluidas.filter(({ dias }) => dias <= 30);
console.log(menos30dias);
