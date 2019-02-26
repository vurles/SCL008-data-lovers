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
window.filterPokemon = filterPokemon()