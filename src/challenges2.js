// Desafio 11
function generatePhoneNumber(lista) {
  // seu código aqui
  for (let zero of lista) {
    if (zero < 0 || zero > 9) {
      return  "não é possível gerar um número de telefone com esses valores"
    }
  }
  
  if (lista.length > 11) {
    return  "Array com tamanho incorreto."
  }
  // else if() {}
  // else {
  let ddd = "";
  let primeiro = "";
  let segundo = "";
  for (let index = 0; index <2 ; index+=1) {
    ddd = ddd+lista[index]
  }
  for (let index = 2; index <7 ; index+=1) {
    primeiro = primeiro+lista[index]
  }
  for (let index = 7; index <11 ; index+=1) {
    segundo = segundo+lista[index]
    
    return '('+ ddd +') '+primeiro+'-'+segundo
}
function testarNumberRepitido(array) {
  let numberRepetido = 0;
  
}
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let agua = "" ;
  let lista = string.split(' ');
  for (let x in lista)  {
    if (x == "1" || x == "2" || x == "3" || x == "4" || x == "5" || x == "6" || x == "7" || x == "8" || ) {
      agua = agua + x
    }
    else {
      
    }
  }
  return agua+' copo de água'
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
