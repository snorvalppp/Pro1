var largeImage = document.getElementById('large-image');

var thumbnails = document.getElementsByClassName('thumbnail');
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onclick = function() {
        largeImage.src = this.src;
        largeImage.alt = this.alt;
    }
}
function validate() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  var date = document.getElementById("start");
  var city = document.getElementById("city");

  var errorMessage = "";

  if (name.value === "") {
    errorMessage += "Please enter your name.\n";
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    errorMessage += "Please enter a valid email address.\n";
  }

  if (message.value === "") {
    errorMessage += "Please enter a message.\n";
  }

  if (date.value === "") {
    errorMessage += "Please select a date.\n";
  }

  if (city.value === "") {
    errorMessage += "Please enter a city.\n";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    return false;
  }

  alert("Thank you for your message!");
  return true;
}