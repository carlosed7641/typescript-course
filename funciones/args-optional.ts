(()=> {
    const fullName = (firstName:string, lastName?:string): string => {
        return `${firstName} ${lastName || "Apellido"}`
    }

    const name = fullName('Carlos')
    

})()