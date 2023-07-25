// 3. Bucle for:
//  Instrucción: Suma todos los números pares del 1 al 50 utilizando un bucle for.

// resultado: 650

let suma = 0;

for (let x = 1; x <= 50; x++) {
  if (x % 2 === 0) {
    suma = suma + x;
  }
}

console.log(suma);
