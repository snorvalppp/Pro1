

function checkNumbers(number) {
    if (number > 0) {
        document.write("Talet " + number +" är positivt.");
    } else if (number < 0) {
        document.write("Talet " + number +" är negativt.");
    } else {
        document.write("Talet " + number + " är noll.");
    }
}
var number=prompt("Vilket är ditt tal?")
checkNumbers(number)