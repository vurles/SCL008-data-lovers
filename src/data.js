/* Manejo de data 

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;*/



const filterPokemon = (DATA, condition) => { //data ? 
  let filteredPoke = DATA.filter(element => { // filter recorre y arroja un nuevo array 
    
    return element.type.includes(condition)// includes funciona con booleanos compara si la condicion se cumple
  })
  return filteredPoke;
};

const filtereggs = (data,condition) => {
  let filterhuevo = data.filter(element => {
    return element.egg.includes(condition)

  })
  return filterhuevo;
};
//inicio de calculo por peso
//const filterporpeso = (data,condition) => {
  //let filterporpesote = data.filter(element => {
    //return element.weight.includes(condition)

  //})
  //return filterporpesote;
//}
//termino calculo por peso

//otra prueba por calcular porcentaje//
//const porcentajePokemon{// porcentaje de pokemon

//const numeroElementos = (data,condition) => {//funcion cuenta el numero de total de la muestra
 // let numeroElement = data.lenght(element => {
  //  return data.lenght(condition);
  //  console.log(numeroElementos);
  //})

 // Const elementosFiltrados = (data,condition) =>{// cuenta el numero total de los elementos filtrados
   // let elementfilter = data.filter(element =>{
   //   return element.filter.lenght.includes(condition)
   // })
  //}

  //return (elementosFiltrados/numeroElementos)*100;// te da el respuesta
//}
//}
// termino de mi otra prueba para calcular porcentaje//

//window.filterPokemon = filterPokemon()
//window.filtereggs = filtereggs()
//window.filterporpeso = filterporpeso()


//ordenando por tres parametros :)

 const sortPokemon = (data, sortBy, sortOrder) => {
  let orderPoke = data.sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  }) 
  if(sortOrder === 'za'){
    orderPoke.reverse();
  }
  return orderPoke;
}

const total = (Data, condition) => {
  let counter=0;
  Data.forEach(element => {
      if (element.type.includes(condition)){
          counter=counter+1;
      }
  }); 
  return Math.round((counter/151)*100) +"%"; 
     //al contador se la pasa la regla de 3 para sacar el porcentaje y luego se redondea con Math.round al numero mas cercano.
}




window.filterPokemon =filterPokemon;
window.filtereggs =filtereggs;
window.sortPokemon =sortPokemon;
window.total = total;
/**
 * *const order = () => {

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. 
El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a
 cuál de los campos de la data se quiere ordenar. 
 El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
}
esto es del MDN para ordenar segun criterio que le pase en mis condiciones
 * function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1;
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}--------fin-------

 * 
 * 
 * 
 */
// const computeTypes = (data) => {
//   const types = {};

//   data.forEach(pokemon => {
//     pokemon.type.forEach(t => {
//       if (!types.hasOwnProperty(t)) {
//         types[t] = 0;
//       }
  
//       types[t]++;
//     })
//   });

//   Object.keys(types).forEach(type => {
//     types[type] = parseInt((types[type] / window.pokemon.pokemon.length) * 100);
//   });

//   return types;
// }
