function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = "I like to wear it"; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
makeShirt();
makeShirt('medium');
//different messege 
makeShirt('small', 'i need a big shirt to wear');
