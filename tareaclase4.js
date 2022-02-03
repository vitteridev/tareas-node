/* Tarea: hacer un programa que tenga un array de objetos que sean marcas y autos,
 calcular el seguro de cada uno, y el total a pagar. Con la diferencia de la Clase 3 que quiero 
 que los autos vengan de un JSON en disco, y se guarde el seguro calculado de todos 
 en disco asi como el total. */
const fs = require("fs");
let seguroTotal = 0;

function escribirJsonEnDisco() {
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
    {
      marca: "Citroen",
      modelo: "C4",
      precio: 170000,
    },
  ];
  const autosString = JSON.stringify(autos, null, 2);

  fs.writeFileSync("./autos.json", autosString);
}

function calcularSeguro(auto) {
  let vaAPagar = auto.precio;
  const marca = auto.marca;

  switch (marca) {
    case "Renault":
      vaAPagar *= 0.2;
      break;
    case "Ford":
      vaAPagar *= 0.3;
      break;
    case "Honda":
      vaAPagar *= 0.4;
      break;
    case "Fiat":
      vaAPagar *= 0.5;
      break;
    case "Citroen":
      vaAPagar *= 0.6;
      break;
  }
  return vaAPagar;
}

function main() {
  escribirJsonEnDisco();

  let seguroTotal = 0;

  const autosObjeto = fs.readFileSync("./autos.json");
  const autosObjetoParseado = JSON.parse(autosObjeto);

  for (let auto of autosObjetoParseado) {
    let seguro = calcularSeguro(auto);
    console.log(seguro);
    auto.seguro = seguro;
    seguroTotal += seguro;
  }

  autosObjetoParseado.push({ seguroTotal: seguroTotal });

  const autosSeguros = JSON.stringify(autosObjetoParseado, null, 2);

  fs.writeFileSync("./autosSeguros.json", autosSeguros);
}

main();
