const comentarios = {
  usuario1: ['Que chato!', 'Esse é LINDO!'],
  usuario2: ['Gosto de coreano.', 'Achei muito feio'],
  usuario3: [
    'No começo tava tudo horrível, no final parecia que tava no começo!',
    'Não gostei',
  ],
  usuario4: ['Ele é bonito, mas estranho.', 'Cabeludo <3'],
  usuario5: ['Usa perfume barato', 'Me engana que eu gosto!'],
  usuario6: [
    'Legalzinho e tem dinheiro, até dá pra ser meu amigo!',
    'Comprem meu pack amores rsrs',
  ],
};

const usuario = {
  ID: 01,
  username: 'DaniFacadinha',
  email: 'danielagiota@hotmail.com',
  senha: 123456,
  comentarios: [
    comentarios.usuario2[1],
    comentarios.usuario3[0],
    comentarios.usuario5[0],
    comentarios.usuario6[1],
  ],
};

console.log(usuario.comentarios);
