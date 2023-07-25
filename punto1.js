//Instrucción: Convierte el siguiente array de nombres a un array de objetos { nombre: 'nombre' } utilizando map,
// pero si el nombre es juan, déjalo como está.

const nombres = ['Ana', 'Juan', 'María', 'Carlos'];

const newNombres = nombres.map((item) => {
  if (item === 'Juan') {
    return item;
  } else {
    return { [item]: item };
  }
});

console.log(newNombres);

//resultado: const nombres = [{Ana: 'Ana'}, 'Juan', {Maria: 'María'}, {Carlos: 'Carlos'}]
