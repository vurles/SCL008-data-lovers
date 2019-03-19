/* Manejo del DOM 
const data = window.POKEMON.pokemon;*///me traigo la data de pokemon y la guargo en una const
//console.log(DATA);
const pokeData = () => {
  fetch ('./data/pokemon/pokemon.json')
  .then(response => {
      return response.json()
  })
  .then(data => {
      //console.log(data.pokemon)
      seeData(data.pokemon);//aqui hago el llamado de mis funciones 
      //console.log(seeData());

  })
  .catch(error => error)
}

window.onload = pokeData();
/**
 * fin de fetch
 */


const pokebox = document.getElementById('root'); // creo una constatante para llammar a mi contenedor root

const pokeType = document.getElementById('type'); // llamo a mi select para poder filtrar por el valor que me da

const pokehuevo = document.getElementById('huevo');//llamo a mi id huevo que esta en html

const calculo = document.getElementById('compu');

const pokeOrden = document.getElementById('order');

//hola vamos a mostrar pagina 1 y 2 a travez de display none y display block 
document.getElementById("start").addEventListener("click",(evento)=>{
  evento.preventDefault();
  document.getElementById("pag1").style.display="none";// el que se muestra primero
  document.getElementById("pag2").style.display="block";// esta forma hace que se vea en bloques las paginas
})

const seeData = (pokeData) => {

    let result = '';
    pokeData.forEach(element => {//element es === a DAATA[i]
        result = pokebox.innerHTML += `
        <div class="carta-box">
                    <div class="carta">    
                      <div class="cara">
                      <h3 class="tituloPoke" >
                      Nombre: ${element.name}
                      </h3> 
                        <img src="${element.img}">
                      </div>
                      <div class="cara detras">
                          <img src="${element.img}">
                          <div class="pokeinfo">
                          <p>Tipo: ${element.type}</p>
                          <p>Debilidad: ${element.weaknesses}</p>
                          <p> Candy: ${element.candy}</p>
                        </div> 
                      </div>    
                    </div>
                  </div>
        `

    });
    return result;
};

pokeType.addEventListener('change', () => {// a mi poketype le paso el evento escuchar 
    let condition = pokeType.value;
    let filtered = filterPokemon(pokeData, condition);
     pokebox.innerHTML = '';
     // limpiando el div
    filtered.forEach(element => { //foreach es un for para array que devuelve un nuevo array con element que es igua a DATA[i]
        pokebox.innerHTML += `
        <div class="carta-box">
        <div class="carta">    
          <div class="cara">
          <h3 class="tituloPoke" >
          Nombre: <hr/> ${element.name}
          </h3> 
            <img src="${element.img}">
          </div>  
          <div class="cara detras">
            <img src="${element.img}">
            <div class="pokeinfo">
            <p>Tipo: ${element.type}</p>
            <p>Debilidad: ${element.weaknesses}</p>
            <p> Candy: ${element.candy}</p> 
          </div>
          </div>    
        </div>
      </div>
        `
    });
   
})
pokeType.addEventListener('change', () =>{
  let condition = pokeType.value;
  let porcentaje  = total(pokeData,condition);
  //.log(porcentaje)
  calculo.innerHTML ='';
    calculo.innerHTML+=`
    <div>
    <h4>El porcentaje total de pokemones es de ${porcentaje} </h4>
    </div>
`
  
})


pokehuevo.addEventListener('change',() => {
let condition = pokehuevo.value
let filtrohuevo = window.poke.filtereggs(pokeData,condition);
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
//implementacion de calculo por peso//
//pokehuevo.addEventListener('change',() => {
  //let condition = pokeweight.value //pokeweight se saca de la parte superior (const pokeweight = document.getElementById('weight')
  //let filterporpesote = filterporpeso(data,condition);
  //pokebox.innerHTML = '';// limpiando el div
  //filterporpesote.forEach(element => {
    //pokebox.innerHTML += `
         // <div class="carta-box">
          //<div class="carta">    
           // <div class="cara">
            //<h3 class="tituloPoke" >
            //${element.name}
            //</h3>
              //<img src="${element.img}"> 
           // </div>  
            //<div class="cara detras">
             // <p>${element.weight}</p>
            //</div>    
          //</div>
        //</div>
  
       //   `
 // })
  //})
 // termino de mi implementacion de calculo por peso//
 //inicio de mi porcentaje

//  function porcentaje() {
//   const num_3 = document.getElementById("num_3").value;
//   const num_4 = document.getElementById("num_4").value;
//    const result = num_3 * num_4 / 100;

//   document.getElementById("num_5").value = result;
//  } 

//termino de mi porcentaje

// pokeOrden.addEventListener('change', () => {
//     let option = pokeOrden.value;
//     let ordenando = //aqui va mi funcion order junto con sus parametros


// })

//Conexion de los select para ordenar con funcion sortPokemon proveniente de data.js 
pokeOrden.addEventListener('change', () => {
    let option = pokeOrden.value;
     let ordering = window.poke.sortPokemon(pokeData, 'name', option); //aqui va mi funcion order junto con sus parametros
     pokebox.innerHTML = '';
     ordering.forEach(element => { 
         pokebox.innerHTML += `
         <div class="carta-box">
         <div class="carta">    
           <div class="cara">
           <h3 class="tituloPoke" >
           Nombre: <hr/> ${element.name}
           </h3> 
             <img src="${element.img}">
           </div>  
           <div class="cara detras">
             <img src="${element.img}">
             <p>Poke tipo: ${element.type}</p>
             <p>Poke numero: ${element.num}</p>
           </div>    
         </div>
       </div>
         `
     })
})


