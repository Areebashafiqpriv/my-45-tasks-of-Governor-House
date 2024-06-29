interface item {
    name:string
    price:number
}
//create 2 objects
const book: item ={
    name: 'ESSENTIAL TYPESCRIPT',
    price:500
}

const Apple:item ={
    name:'apple',
    price:200
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`applename: ${book.name}, price: $${Apple.price}`)