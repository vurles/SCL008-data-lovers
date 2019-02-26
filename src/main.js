/* Manejo del DOM */
const data = POKEMON.pokemon;//me traigo la data de pokemon y la guargo en una const
//console.log(DATA);
const pokebox = document.getElementById('root'); // creo una constatante para llammar a mi contenedor root

const pokeType = document.getElementById('type'); // llamo a mi select para poder filtrar por el valor que me da



const seeData = (data) => {

    let result = '';
    data.forEach(element => {//element es === a DAATA[i]
        result = pokebox.innerHTML += `
        <div class="carta-box">
                    <div class="carta">    
                      <div class="cara">
                      <h3 class="tituloPoke" >
                      ${element.name}
                      </h3>
                        <img src="${element.img}">
                      </div>
                      <div class="cara detras">
                        <p>${element.type}</p>
                        <p>${element.weaknesses}</p>
                        <p>${element.candy}</p>
                      </div>    
                    </div>
                  </div>
        `

    });
    return result;
}
pokeType.addEventListener('change', () => {
    let condition = pokeType.value
    let filtered = filterPokemon(data, condition);
    // limpiando el div
    pokebox.innerHTML = '';
    filtered.forEach(element => {
        pokebox.innerHTML += `
        <div>
        <div class="card">
            <div class="box">
                <h3 class="tituloPoke" >
                ${element.name}
                </h3>
                <div class="img">
                    <img src="${element.img}">
                </div>
                <p> Tipo: ${element.type}</p>
                <p>Debilidad: ${element.weaknesses}</p>
            </div>
        </div>
    </div>

        `
    })
})



window.onload = seeData(data);