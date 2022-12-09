(()=> {

    type Avenger = {
        name: string,
        weapon: string
    }
    
    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const capAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thot',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, capAmerica, thor]

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
    }


})()