let seguroTotal = 0;

const autos = [
  {
    marca: "Renault",
    modelo: "4",
    precio: 10000,
  },
  {
    marca: "Ford",
    modelo: "Taunus",
    precio: 25000,
  },
  {
    marca: "Honda",
    modelo: "Civic",
    precio: 100000,
  },
  {
    marca: "Fiat",
    modelo: "Cronos",
    precio: 135000,
  },
];

function calcularSeguroTotal(marca, modelo, precio) {
  let seguro = calcularSeguro(marca, precio);
  seguroTotal += seguro;
  console.log(`${marca} ${modelo}: paga un seguro de $${seguro}`);
}

function calcularSeguro(marca, precio) {
  let vaAPagar = precio;

  switch (marca) {
    case marca:
      vaAPagar *= 0.5;
      break;
    case marca:
      vaAPagar *= 0.6;
      break;
    case marca:
      vaAPagar *= 0.7;
      break;
    case marca:
      vaAPagar *= 0.8;
      break;
  }
  return vaAPagar;
}

function main() {
  for (let auto of autos) {
    calcularSeguroTotal(auto.marca, auto.modelo, auto.precio);
  }
  console.log(`Seguro total a pagar: ${seguroTotal}`);
}

main();
