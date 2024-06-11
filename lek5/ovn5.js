function calculateProduct() {    

    var num1 = prompt("Ditt första tal: ");
    if (num1==null || num1.trim() =="") {
        alert ("Du angav inte ett giltigt tal")
    }
    var num2 = prompt("Ditt andra tal: ");
    if (num2==null || num2.trim() =="") {
        alert ("Du angav inte ett giltigt tal")
    } else {
        var num1=parseFloat(num1);
        var num2=parseFloat(num2);
        ///parseFloat gör om sträng till nummer, när prompt skrivits in så är det en text. 
    }

if (isNaN(num1)|| isNaN(num2))  {
    alert ("Du angav inte ett tal")
}
    
    var product = num1 * num2;
    alert('Produkten av ' + num1 + ' och ' + num2 + ' är ' + product);
}

calculateProduct();

// alternativ för att få nummer direkt vid prompt
// var a = parseFloat(prompt("Ange det första talet:"));
// var b = parseFloat(prompt("Ange det andra talet:")); 