/*
File: app.js
Author: Kukta Tamara
Copyright: 2023, Kukta Tamara
Group: SZOFT I-1-E
Date: 2023-03-11
Github: https://github.com/KTamara86/
Licenc: GNU GPL
*/

const arlistaTorzs = document.querySelector('#arlistaTorzs');
const nevInput = document.querySelector('#nev');
const kerekInput = document.querySelector('#kerek');
const hasznalatInput = document.querySelector('#hasznalat');
const arInput = document.querySelector('#ar');

const arlistaLista = [
    {nev: "Cassis", kerek: 28, hasznalat: "offroad", ar: 557900},
    {nev: "Albion 900", kerek: 28, hasznalat: "trekking", ar: 519900},
    {nev: "Asgard", kerek: 29, hasznalat: "technikás utak", ar: 519900},
    {nev: "Ruga", kerek: 29, hasznalat: "hegyi" , ar: 372900},
    {nev: "Reptila", kerek: 28, hasznalat: "városi", ar: 308900},
    {nev: "Sirmium", kerek: 29, hasznalat: "hegyi", ar: 264900},
];

function loadArlista () {
    arlistaLista.forEach((kerekpar) => {
        let tr = document.createElement('tr');
        let tdNev = document.createElement('td');
        let tdKerek = document.createElement('td');
        let tdHasznalat = document.createElement('td');
        let tdAr = document.createElement('td');

        tdNev.textContent = kerekpar.nev;
        tdKerek.textContent = kerekpar.kerek;
        tdHasznalat.textContent = kerekpar.hasznalat;
        tdAr.textContent = kerekpar.ar;
        
        arlistaTorzs.append(tr);
        tr.append(tdNev);
        tr.append(tdKerek);
        tr.append(tdHasznalat);
        tr.append(tdAr);

    });
}

loadArlista();