/* Manejo del DOM */
const DATA = POKEMON.pokemon;//me traigo la data de pokemon y la guargo en una const
//console.log(DATA);
const pokebox = document.getElementById('root'); // creo una constatante para llammar a mi contenedor root

const seeData = (DATA) => {

    let result = '';
    DATA.forEach(element => {//element es === a DAATA[i]
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
window.onload = seeData(DATA);
