function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "3.xml", true);
    xhttp.send();
  }
  
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<table border='1'><tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
      table += "<tr><td>" +
        // "childNodes", representerar en samling av underordnade noder (child nodes) för ett element i XML-dokumentet.
        //nodeValue, representerar textinnehållet i en nod.
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    table += "</table>";
    document.getElementById("demo").innerHTML = table;
  }
