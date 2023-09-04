const container = document.getElementById("contenedor");
const URL = `https://dog.ceo/api/breeds/image/random`;
const btnR = document.getElementById("refresh");

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const nombreRaza = data.message.split("/")[4];
    const describe = document.getElementById("descripcion");
    describe.innerHTML = `
            <div class="card-row" style="width: 30rem;">
                <img class="card-img-top" src=${data.message} alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Raza: <b>${nombreRaza}</b</p>
                </div>
            </div>`;
  });

btnR.addEventListener("click", () => {
  location.reload();
});
