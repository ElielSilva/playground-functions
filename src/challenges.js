// Desafio 1
function compareTrue(valor1,valor2) {
  return valor1 && valor2
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(" ")
}

// Desafio 4
function concatName(lista) {
  return lista[lista.length-1]+', '+lista[0]
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return wins*3+ties*1
}

// Desafio 6
function highestCount(lista) {
  // seu código aqui
  let retorno = 0;
  let maior =-100;
  for (let contador of lista) {
    if (contador > maior) {
      maior = contador
    }

  }
  for (let repeticao of lista)  {
    if (repeticao == maior) {
      retorno+=1
    }
  }
  return retorno
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let poisition1 = 0;
  let poisition2 = 0;
  if (mouse < cat1) {
    poisition1 = cat1 - mouse
  }

  else if (mouse > cat1)  {
    poisition1 =mouse - cat1 
  }
  if (mouse < cat2) {
    poisition2 = cat2 - mouse
  }

  else if (mouse > cat2)  {
    poisition2 =mouse - cat2 
  }
  

  if (poisition1 > poisition2) {
    return "cat2"
  }
  else if (poisition2 > poisition1) {
    return 'cat1'
  }
  else if (poisition1 == poisition2) {
    return  "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(lista) {
  let result =[];
  for (let number of lista) {
    if (number%3==0 && number %5==0) {
      result.push("fizzBuzz")
    }
    else if (number%3==0) {
      result.push("fizz")
    }
    else if (number %5==0) {
      result.push("buzz")
    }
    else {
      result.push("bug!")
    }
  }
  return result
}

// Desafio 9
function encode(code) {
  // seu código aqui
  // let code ="hello";
  let palavra ='';
  for (let letra of code) {
    if (letra == 'a') {
      palavra = palavra+'1'
    }
    else if (letra == 'e') {
      palavra = palavra+'2'
    }
    else if (letra == 'i') {
      palavra = palavra+'3'
    }
    else if (letra == 'o') {
      palavra = palavra= palavra+'4'
      
    }
    else if (letra == 'u') {
      palavra = palavra+'5'
    }
    else if (letra == ' ') {
      palavra = palavra+' '
    }
    else {
      palavra = palavra+letra
    };
  }
  return palavra
}
function decode(code) {
  // seu código aqui
  let palavra ='';
  for (let letra of code) {
    if (letra == '1') {
      palavra = palavra+'a'
    }
    else if (letra == '2') {
      palavra = palavra+'e'
    }
    else if (letra == '3') {
      palavra = palavra+'i'
    }
    else if (letra == '4') {
      palavra = palavra= palavra+'o'
      
    }
    else if (letra == '5') {
      palavra = palavra+'u'
    }
    else if (letra == ' ') {
      palavra = palavra+' '
    }
    else {
      palavra = palavra+letra
    };
  }
  return palavra
}
// Desafio 10
function techList(lista,name) {
  // seu código aqui
  if (lista.length == 0) {
    return 'Vazio!'
  }
  else {
    let Array = [];
    for (let novaTech of lista.sort()) {
      Array.push({tech: novaTech,name: name})
    }
    return Array
  }
}



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

