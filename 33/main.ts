let numbers :  number [] = [1,2,3,4,5,6,7,8,9]
for (let number of numbers) {


if (number === 1) {
    console.log (`${numbers}st`)

}else if (number === 2){
    console.log(`${numbers}nd`)

}else if(number === 3){
    console.log(`${numbers}rd`)

}else {
    console.log(`${number}th`)
}
}