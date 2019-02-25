/* Manejo del DOM */
const DATA = POKEMON.pokemon;//me traigo la data de pokemon y la guargo en una const
//console.log(DATA);
const pokebox = document.getElementById('root'); // creo una constatante para llammar a mi contenedor root

const seeData = (DATA) => {

    let result = '';
    DATA.forEach(element => {//element es === a DAATA[i]
        result = pokebox.innerHTML += `
        <div>
            <div class="card">
                <div class="box">
                    <h3 class="tituloPoke" >
                    ${element.name}
                    </h3>
                    <div class="img">
                        <img src="${element.img}">
                    </div>
                </div>
            </div>
        </div>
        `
    });
    return result;
}
window.onload = seeData(DATA);
