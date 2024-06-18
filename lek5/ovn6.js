
    var a = parseFloat(prompt("Ange det första talet:"));
    var b = parseFloat(prompt("Ange det andra talet:")); 

    if (isNaN(a)|| isNaN(b))  {
        document.write ("Du angav inte ett tal")
    }   else {
        document.write ("Jämförelsen mellan " + a + " och " + b + "<br>")
        document.write (a + ">" + b + ": " + (a > b) + ("<br>"))
        document.write (a + "<" + b + ": " + (a < b) + ("<br>"))
        document.write (a + ">=" + b + ": " + (a >= b) + ("<br>"))
        document.write (a + "<=" + b + ": " + (a <= b) + ("<br>"))
        document.write (a + "+" + b + ": " + (a + b) + ("<br>"))
        document.write (a + "*" + b + ": " + (a * b) + ("<br>"))
        document.write (a + "/" + b + ": " + (a / b) + ("<br>"))



}

