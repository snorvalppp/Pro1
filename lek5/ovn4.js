function checkNumber() {
    var number =parseFloat(number)
    switch (number) {
        case 0:
            document.write ("Talet " + number + " är negativt")
            break;
        case 0:
            document.write ("Talet är noll")
            break;
        case 1:
            document.write ("Talet " + number + " är positivt")
            break;
        default:
            document.write ("Inget tal.")
            break;
    }
}
var number=prompt("Vilket är ditt tal?")
checkNumber(number)