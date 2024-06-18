var x=prompt("Vilket tal vill du få tabell för?");
if (isNaN(x)||!x ||x>=10 ||x<=0) {
    document.write("Vänligen ange giltiga, positiva, tal. 1-10.")
} else {
    for (y=1; y<= 10;y++){
        document.write (y,"x",x,"=",x*y,"<br>");
        }
    document.write("<br>");}