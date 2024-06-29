function sandwich(...items: string[]): void{
    console.log("Sandwich order:")
    for (let i =0;i < items.length; i++) {
        console.log( `- ${items[i]}`)
    }
}

console.log("enjoy your sandwich Areeba Shafiq")

sandwich('capsicum','cheese','chicken')
sandwich('beef','cheese')
sandwich('garlic sauce','mayo sauce')