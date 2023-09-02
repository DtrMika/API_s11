const container = document.getElementById("contenedor");
const URL = `https://dog.ceo/api/breeds/image/random`;

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const img = document.getElementById("imgen");
    img.src = data.message;

    const nombreRaza = data.message.split("/")[4];
    const describe = document.getElementById("descripcion");
    describe.innerHTML = `Raza: <b>${nombreRaza}</b>`;
  });
