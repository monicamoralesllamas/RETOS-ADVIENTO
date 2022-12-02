

function wrapping(gifts) { 

    // gifts.map(gift => {
    //     let wrap= ('*'.repeat(gift.length+2));
    //     giftsWrapped.push(`${wrap}\n${gift}${wrap}`)     
    // });
    return gifts.map(gift =>{
        let wrap = "*".repeat(gift.length + 2);
        return wrap + '\n' + "*"+gift+"*"+"\n"+wrap;
    })
}
    // for (let index = 0; index < gifts.length; index++) {
    //     const element = gifts[index];
    //     let wrap
    //     wrap= `${'*'.repeat(element.length+2)}\n*${element}*${'\n'}${'*'.repeat(element.length+2)}`
    //     return wrap
    //  }
    
    // }


const gifts = ['book', 'game', 'socks','felicidad absoluta']
const wrapped = wrapping(gifts)
console.log(wrapped)   
// element = 'book'
// let wrap
// wrap= `${'*'.repeat(element.length+2)}\n*${element}*${'\n'}${'*'.repeat(element.length+2)}`
// console.log (wrap)

// console.log ('******\n*book*\n******')
// const  gift = 'book'
// console.log (gift)
// console.log(gift.length)
// console.log ('*'.repeat(gift.length+2))
// let envoltorio
// envoltorio = '*'
// console.log ('*'.repeat(4))
// console.log (envoltorio)