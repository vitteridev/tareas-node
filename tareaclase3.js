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

function calcularSeguroTotal(auto) {
  let seguro = calcularSeguro(auto);
  seguroTotal += seguro;
  console.log(`${auto.marca} ${auto.modelo}: paga un seguro de $${seguro}`);
}

function calcularSeguro(auto) {
  let vaAPagar = auto.precio;
  const marca = auto.marca;

  switch (marca) {
    case "Renault":
      vaAPagar *= 0.5;
      break;
    case "Ford":
      vaAPagar *= 0.6;
      break;
    case "Honda":
      vaAPagar *= 0.7;
      break;
    case "Fiat":
      vaAPagar *= 0.8;
      break;
  }
  return vaAPagar;
}

function main() {
  for (let auto of autos) {
    calcularSeguroTotal(auto);
  }
  console.log(`Seguro total a pagar: ${seguroTotal}`);
}

main();
