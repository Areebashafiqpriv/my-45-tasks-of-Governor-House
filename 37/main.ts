function makeShirt(size: string = 'large' ,text:string ="I like to wear it"): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)

}
makeShirt ();
makeShirt('medium')

//different messege 
makeShirt('small','i need a big shirt to wear')