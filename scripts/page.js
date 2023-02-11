var temp = false;
var images = ["src/IMG_1851.jpeg","src/IMG_1852.jpeg",
"src/IMG_1853.jpeg","src/IMG_1854.jpeg","src/IMG_1856.jpeg","src/IMG_1850.jpeg"];
var index = 0;

$(document).ready(function () {
    AOS.init({
      duration: 1200,
    })
});

function navigateToServices(){
  location.href = "services.html";
}

function navigateToGallery(){
  location.href = "gallery.html";
}

function openPopUp(){
  alert("img clicked");
}


