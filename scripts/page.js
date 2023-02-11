var temp = false;
var images = ["src/IMG_1851.jpeg","src/IMG_1852.jpeg",
"src/IMG_1853.jpeg","src/IMG_1854.jpeg","src/IMG_1856.jpeg","src/IMG_1850.jpeg"];
var index = 0;

$(document).ready(function () {
  setInterval(function(){
    $("#carousel").fadeOut(1000, function() {
      index = index % images.length;
      $("#carousel").attr("src",images[index]);
      index++;
    }).fadeIn(1000);
  },3000)

    // Activate Carousel
    $("#myCarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });

    AOS.init({
      duration: 1200,
    })
});


function changeImg(){
  $("#carousel").fadeOut(1000, function() {
    $("#carousel").attr("src","src/IMG_1851.jpeg");
}).fadeIn(1000);
return false;
}

function navigateToServices(){
  location.href = "services.html";
}

function navigateToGallery(){
  location.href = "gallery.html";
}

function openPopUp(){
  alert("img clicked");
}


