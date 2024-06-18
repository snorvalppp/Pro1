function calculateArea() {
        var bredd = parseFloat(prompt("Ange det bredden på rektangel: "));
        var hojd = parseFloat(prompt("Ange det höjden på rektangeln: ")); 

        if (!bredd || !hojd || isNaN(bredd) || isNaN(hojd) || hojd <=0 || bredd <=0) {
            document.getElementById('resultat').innerText= "Vänligen ange giltiga, positiva, tal."
        } else {

        var area = bredd * hojd;

        document.getElementById('resultat').innerText="Rektangelns area är " + area + " i kvadrat"}
        }
