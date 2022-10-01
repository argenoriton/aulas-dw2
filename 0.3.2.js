const tarefas = [
  {
    titulo: 'Assistir Netflix',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Tomar Chimarrão',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Curtir uma Praia',
    concluida: true,
    dias: 60,
  },
  {
    titulo: 'Assistir Amazon',
    concluida: false,
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
    dias: 60,
  },
];

const concluidas = tarefas.filter(({ concluida }) => concluida === true);
const naoConcluidas = tarefas.filter(({ concluida }) => concluida === false);

const concluidas = concluidas.filter(({ dias }) => dias < 30);
console.log(concluidas);
