
window.poke ={

 filterPokemon : (pokeData, condition) => { //pokeData ? 
  let filteredPoke = pokeData.filter(element => { // filter recorre y arroja un nuevo array 
    
    return element.type.includes(condition)// includes funciona con booleanos compara si la condicion se cumple
  })
  return filteredPoke;
},

 filtereggs : (pokeData,condition) => {
  let filterhuevo = pokeData.filter(element => {
    return element.egg.includes(condition)

  })
  return filterhuevo;
},

  sortPokemon : (pokeData, sortBy, sortOrder) => {
  let orderPoke = pokeData.sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  }) 
  if(sortOrder === 'za'){
    orderPoke.reverse();
  }
  return orderPoke;
},

 total : (pokeData, condition) => {
  let counter=0;
  pokeData.forEach(element => {
      if (element.type.includes(condition)){
          counter=counter+1;
      }
  }); 
  return Math.round((counter/151)*100) +"%"; 
     //al contador se la pasa la regla de 3 para sacar el porcentaje y luego se redondea con Math.round al numero mas cercano.
}
}

