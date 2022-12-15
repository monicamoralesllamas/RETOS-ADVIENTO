function wrapping(gifts) { 

    return gifts.map(gift =>{
        let wrap = "*".repeat(gift.length + 2);
        return wrap + '\n' + "*"+gift+"*"+"\n"+wrap;
    })
}
 

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)   
