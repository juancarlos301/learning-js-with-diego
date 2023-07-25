// 2. Método splice y while:
// Instrucción: Elimina el segundo elemento del siguiente array, después agregale un número después del número 9,
//  esto debe de funcionar igual si cambio el número 9 de posición.

// material: const array = [3, 7, 2, 9, 5];

// resultado: const array = [3, 2, 9, 10, 5];

const array = [3, 7, 2, 9, 5];

// Eliminar el segundo elemento (índice 1)
array.splice(1, 1);

// Buscar la posición del número 9 en el array
let index = 0;
while (index < array.length) {
  if (array[index] === 9) {
    break;
  }
  index++;
}

// Agregar el número 10 después del número 9
array.splice(index + 1, 0, 10);

console.log(array);
