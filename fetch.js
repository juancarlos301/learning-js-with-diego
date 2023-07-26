const url = "https://pokeapi.co/api/v2/pokemon/6/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let element = document.getElementById("element");
    element.innerHTML = `
            <img src="${data.sprites.front_default}"/>
            <p>Nombre del Pokemon con el id ${data.id} : ${data.name}</p>
                <p>Experiencia Base : ${data.base_experience}</p>
                <p>Altura : ${data.height} M</p>
            `;
  });
