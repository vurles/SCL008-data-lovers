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
}
//ordenando por tres parametros :)

const sortPokemon = (data, sortBy, sortOrder) => {
  
}


window.filterPokemon =filterPokemon;
window.filtereggs =filtereggs;
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