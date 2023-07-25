// Combinando map y splice:
//  Instrucción: Dado el siguiente array de números, utiliza map para elevar al cuadrado cada elemento,
// luego utiliza splice para eliminar los números menores que 50 del array resultante.

// material: const array = [10, 20, 30, 40, 50, 60, 70];

// Resultado: [100, 400, 900, 1600, 2500, 3600, 4900]

const array = [10, 20, 30, 40, 50, 60, 70];

const sqarray = array.map((index) => {
  return index * index;
});

console.log(sqarray);

for (let x = sqarray.length; x >= 0; x--) {
  if (sqarray[x] < 50) {
    sqarray.splice(x, 1);
  }
}

console.log(sqarray);
