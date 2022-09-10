function compra(valor, convenio, cartaodaLoja) {
  let desconto = 0;
  if (convenio && cartaodaLoja) {
    desconto = valor * 0.15;
  } else if (convenio || cartaodaLoja) {
    desconto = valor * 0.1;
  }
  return valor - desconto;
}

console.log(compra(1000, true, true));
