
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
  let maxCarryBox = reindeers.join("").length * 2
  let weightGifts = packOfGifts.join("").length
  return (maxCarryBox / weightGifts) >> 0
}


//FUNCION PRPUESTA PERO NO PASA LOS TESTS
// function distributeGifts(packOfGifts, reindeers) {

//   for (let i = 0; i < packOfGifts.length; i++) {
//     packOfGifts[i] = packOfGifts[i].length};  
   
//    let weightPacks = packOfGifts.reduce((a,b)=>(a+b))
   
//    for (let i = 0; i < reindeers.length; i++) {
//      reindeers[i] = reindeers[i].length};  
   
//    let reindeersCanCarry= reindeers.reduce((a,b)=>(a+b))
  
   
//    totalPacks = (reindeersCanCarry*2)/weightPacks
//   return(totalPacks)

// }


console.log(distributeGifts(packOfGifts, reindeers))


  



//1. contar el total de las letras del array pack of gifts

// console.log(packOfGifts)
// console.log(packOfGifts.length)
// console.log(getArrayLenght(packOfGifts));
//2. contar el total de letras dentro del array reindeers

//3. divir el 1 por el 2 
// distributeGifts(packOfGifts, reindeers)

// console.log(distributeGifts(packOfGifts, reindeers))