//https://api.nevnapok.eu/nev/`nev`

function kereses()
{
    var keresett = document.getElementById("keresett").value
    fetch(`https://api.nevnapok.eu/nev/${keresett}`)
    .then(x => x.json())
    .then(y => megjelenit(y,keresett));
}

function kereses2()
{
    var keresett2 = document.getElementById("keresett2").value
    fetch(`https://api.nevnapok.eu/nap/${keresett2}`)
    .then(x => x.json())
    .then(y => megjelenit2(y,keresett2));
}

function megjelenit(adatok,bekert)
{
    console.log(adatok)
    var kiiras = document.getElementById("kiiras")
    for (const elem of adatok[bekert]) {
        kiiras.innerHTML += `
        <li>${elem}</li>
        `
    }
}

function megjelenit2(adatok,bekert)
{
    console.log(adatok)
    var kiiras2 = document.getElementById("kiiras2")
    for (const elem of adatok[bekert]) {
        kiiras2.innerHTML += `
        <li>${elem}</li>
        `
    }
}