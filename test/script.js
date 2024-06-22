var largeImage = document.getElementById('large-image');

var thumbnails = document.getElementsByClassName('thumbnail');
for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = function() {
    largeImage.src = this.src;
    largeImage.alt = this.alt;
  }
}
