let namn = "Erik";
let ålder = 30;
let aktiv = true;
let pris = 19.99999;

console.log("Namn:", namn, typeof namn);
console.log("Ålder:", ålder, typeof ålder);
console.log("Aktiv:", aktiv, typeof aktiv);
console.log("Pris:", pris, typeof pris);

let summa = ålder + pris; 
let produkt = ålder * 2;

console.log("Summa:", summa);
console.log("Produkt:", produkt);

let strängÅlder = ålder.toString();
let flyttalPris = pris.toFixed(2);

console.log("Ålder:", strängÅlder, typeof strängÅlder);
console.log("Pris:", flyttalPris, typeof flyttalPris);
