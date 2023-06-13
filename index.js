console.clear();
console.log("start");

// Math.floor(Math.random() * (max - min + 1) + min);
let a = Math.floor(Math.random() * (5 -1 + 1) +1);

console.log(a);
// 1 uzd
//Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

let walletLength =  Math.floor(Math.random() * (30 -10 + 1) +10);
let wallet = [];
for (let i=0; i<walletLength; i++){
    wallet.push(Math.floor(Math.random() * (10 -0 + 1) +0));
}
console.log(wallet);

//2 uzd 
// Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

let suma = 0;
for (let i=0; i<walletLength; i++){
    suma += wallet[i];
}
console.log (suma);

//3 uzd 
//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

let suma2 = 0;
for (let i=0; i<walletLength; i++){
    if(wallet[i]>2)
    suma2 += wallet[i];
}
console.log (suma2);

// 4 uzd 
//Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

for (let i=0; i<walletLength; i++){
    if(wallet[i]<=2)
    wallet[i] = 0
}
console.log (wallet);

//5
//Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

let biggestCoin = 0;
let biggestCoinCount=0;
for (let i=0; i<walletLength; i++){
    if(wallet[i]> biggestCoin)
    biggestCoin = wallet[i] 
}
for (let i=0; i<walletLength; i++){
    if(wallet[i]=== biggestCoin)
    biggestCoinCount ++; 
}

console.log (biggestCoin, biggestCoinCount);

//6
//Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

for (let i=0; i<walletLength; i++){
    if(wallet[i]=== 0)
    wallet[i] = i+1;
}
console.log(wallet);

//7
//Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

