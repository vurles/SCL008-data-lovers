/* Manejo del DOM */
const data = POKEMON.pokemon;//me traigo la data de pokemon y la guargo en una const
//console.log(DATA);
const pokebox = document.getElementById('root'); // creo una constatante para llammar a mi contenedor root

const pokeType = document.getElementById('type'); // llamo a mi select para poder filtrar por el valor que me da

const pokehuevo = document.getElementById('huevo');//llamo a mi id huevo que esta en html

//hola vamos a mostrar pagina 1 y 2 a travez de display none y display block 
document.getElementById("start").addEventListener("click",(evento)=>{
  evento.preventDefault();
  document.getElementById("pag1").style.display="none";// el que se muestra primero
  document.getElementById("pag2").style.display="block";// esta forma hace que se vea en bloques las paginas

})

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
    
    pokebox.innerHTML = '';// limpiando el div
    filtered.forEach(element => {
        pokebox.innerHTML += `
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
    })
})
pokehuevo.addEventListener('change',() => {
let condition = pokehuevo.value
let filtrohuevo = filtereggs(data,condition);
pokebox.innerHTML = '';// limpiando el div
filtrohuevo.forEach(element => {
  pokebox.innerHTML += `
        <div class="carta-box">
        <div class="carta">    
          <div class="cara">
          <h3 class="tituloPoke" >
          ${element.name}
          </h3>
            <img src="${element.img}">
          </div>  
          <div class="cara detras">
            <p>${element.egg}</p>
          </div>    
        </div>
      </div>

        `
})
})


window.onload = seeData(data);