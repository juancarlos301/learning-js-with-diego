// 5. Combinando map  :
//  Instrucción: Escribe un bucle for que multiplique cada elemento del siguiente array por su índice correspondiente utilizando map.

// material: const array = [2, 4, 6, 8, 10]

// Resultado: [0, 4, 12, 24, 40]

const array = [2, 4, 6, 8, 10];

const otrarray = [];
// se declara un array vacío  donde se va almacenar los resultados.

for (let x = 0; x < array.length; x++) {
  otrarray.push(array[x] * x);
}


console.log(otrarray);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
