(()=> {
    const fullName = (firstName:string, lastName?:string, upper:boolean = false):string => {
        if (upper) {
            return `${firstName} ${lastName || "Apellido"}`.toUpperCase()
        } else {
            return ""
        }
    }

    const name = fullName('Carlos', "Castro", true)
    

})()