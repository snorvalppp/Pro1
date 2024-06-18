let i =0;
do {
	console.log(i);
	i++; }
while (i<9);


const obj = {a:1, b:2, c:3};
for (let key in obj) {
    console.log(key, obj[key]);}




// for (x=1; x <=10; x++) {
//     for (y=1; y<= 10;y++){
//         document.write (y,"x",x,"=",x*y,"<br>");
//     }
//     document.write("<br>")
// }

// dessa två ger samma resultat

var x = 1;
while (x<=10){
    for (y=1; y<=10; y++){
        document.write (y,"x",x,"=",y*x,"<br>");
    }
    document.write ("<br>");
    x++;
}

const namn = "Alice";
const ålder = 30;
const hälsning = `Hej mitt namn är ${namn} och jag är ${ålder} år gammal.`;
console.log(hälsning);
