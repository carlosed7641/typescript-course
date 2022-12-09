(()=> {
    const addNumbers  = (a: number, b:number) =>  a + b
    const greet  = (name: string) =>  `Hola ${name}`
    const helloWorld = () => 'Hola Mundo'

    let myFunction: (a:number, b:number)=> number


    myFunction = addNumbers
    console.log(myFunction(2, 3))

    // myFunction = greet
    // console.log(myFunction("Carlos"))

    // myFunction = helloWorld
    // console.log(myFunction())
    
    
})()