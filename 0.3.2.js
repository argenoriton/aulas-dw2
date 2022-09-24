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
];

const concluidas = tarefas.filter((tarefas) => tarefas.concluida === true);
console.log(concluidas);
