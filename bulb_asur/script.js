document.getElementById("bulb").addEventListener("click", changeImage);

function changeImage() {
  var image = document.getElementById('bulb');
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}

console.log("This is a popup!")
