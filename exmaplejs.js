/*
const firts = 1
let second = '1'
var third = true

if (firts === second) {
    return 'hola mundo'
}else {
    return 'adios mundo'
}

const see = {
    hola: 'adios',
    1: 2
}
const seeDiferent = ['hola', 2, 'adios']

see.hola
see['hola']

console.log(seeDiferent[2]) 

const persona = {
    edad: 12,
    sexo: 'masculino'
}

const familia = [{}, {}, {
    amigos: [
        'fermin'
    ]
}]

familia[2].amigos[0]
*/
// day 2

// || => o  && => y !!=> verdadera
/*
for (inicializacion de la variable; condicion; sumar al iterador) {

}

*/
// tengo un array, necesito que el array contenga los números del 0-10 en orden, y para eso necesito que utilices un
//siclo for
/*
let arrayx = [0, 2, 3, 4, 5, 6, 8, 9];

for (let x = 0; x <= 10; ++x) {
  //0 / 1 / 2
  // si quiero que me quede en la posicion 1 entonces pongo 1, si quiero 2 pongo 2
  if (arrayx[x] !== x) {
    arrayx.splice(x, 0, x);
  }
  // x = 1 y necesitamos que agregue despues de la posicion 0
  //sin el spread operator[[0,2,3,4,5,6,8,9,10], 10]
  // con el operador [0,2,3,4,5,6,8,9,10]
}
console.log(arrayx);

//x++ => x + 1

let arrayy = [0, 2, 3, 4, 5, 6, 8, 9];

//while (condicion) {
// lo tienes que hacer manualmente al final de todo el proceso
//}
let y = 0;
while (y <= 10) {
    if (arrayy[y] !== y) {
        arrayy.splice(y, 0, y);
    }
    y++;
}
console.log(arrayy);
*/

// reto 3

// tendras un array de numeros y por cada número tienes que multiplicar su valor por 2 utilizando un for

const arrayMultiplo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = arrayMultiplo.map((item) => item * 2);
//length = 10
/*for (let i = 0; i < arrayMultiplo.length;i++){
    arrayMultiplo[i] = arrayMultiplo[i] * 2
}
*/
console.log('arrayMultiplo', arrayMultiplo);
console.log(newArray);

//ejercicio 4

//utilizar el map, para cambiar la edad de cada persona restandole 8 si es par, si es impar se le resta 7
const personas = [
  {
    nombre: 'Luis',
    edad: 22,
  },
  {
    nombre: 'Juan',
    edad: 50,
  },
  {
    nombre: 'David',
    edad: 99,
  },
  {
    nombre: 'Diego',
    edad: 77,
  },
];

const newpersonas = personas.map((item, index) => {
  //item = {nombre: 'Luis', edad: 22}

  if (item.edad % 2 === 0) {
    // si es par 0 => false => no entra en el condicional
    item.edad = item.edad - 8;
    return item;
  }
  item.edad = item.edad - 7;

  return item;
});

console.log(newpersonas);
console.log(0 == false);
