function compra(valor, isConvenio, isCartaodaLoja, isPrimeiraCompra) {
  let desconto = 0;
  if (isConvenio && isCartaodaLoja) {
    desconto = valor * 0.15;
  } else if (isConvenio || isCartaodaLoja) {
    desconto = valor * 0.1;
  }

  if (isPrimeiraCompra == true) desconto = desconto + valor * 0.05;

  if (desconto > 100) desconto = 100;

  return valor - desconto;
}

console.log(compra(1000, true, true, true));
