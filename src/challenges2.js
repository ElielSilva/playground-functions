// Desafio 11
function generatePhoneNumber(lista) {
  if (lista.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let zero of lista) {
    if (zero < 0 || zero > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let valor = true;
  let contador = 0;
  for (let x of lista) {
    for (let y of lista) {
      if (x === y) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contador = 0;
  }
  let ddd = '';
  let primeiro = '';
  let segundo = '';
  for (let index = 0; index < 2; index += 1) {
    ddd += lista[index];
  }
  for (let index = 2; index < 7; index += 1) {
    primeiro += lista[index];
  }
  for (let index = 7; index < 11; index += 1) {
    segundo += lista[index];
  }
  return `(${ddd}) ${primeiro}-${segundo}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);
  if (a >= b + c) {
    return false;
  }
  if (b >= a + c) {
    return false;
  }
  if (c >= b + a) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let numsStr = string.replace(/[^0-9]/g, '');
  let lista = numsStr.split('');
  console.log(lista);
  let contador = 0;
  for (let iterator of lista) {
    contador += Math.abs(iterator);
  }
  if (contador == 1) {
    return `${contador.toString()} copo de água`;
  }
  return `${contador.toString()} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
