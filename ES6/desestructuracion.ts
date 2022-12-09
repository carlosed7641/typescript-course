(()=> {

    type Avengers = {
        nick: string
        spiderman: string
        ironman: string
        activo: boolean
        poder: number
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        spiderman: 'Toby Maguire',
        ironman: 'Robert Downey Jr.',
        activo: true,
        poder: 1500
    }

    const printAvengers = ({ironman, ...resto}: Avengers) => {
        console.log(ironman, resto)
    }

    printAvengers(avengers)

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15 ]

    const [ capitan , ironman, seriaUnNumero ] = avengersArr
})()