$(document).ready(function () {
    AOS.init({
      duration: 1200,
    })

    let emailForm = document.getElementById("emailForm");
    emailForm.addEventListener("submit", (e) => {
      e.preventDefault();
    
      let name = document.getElementById("name");
      let msg = document.getElementById("msg");
      let email = document.getElementById("email");
      // handle submit
      fetch("https://formsubmit.co/ajax/millennianailsspa@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: msg.value
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(alert("Message Sent!"))
        .then(()=>{
          name.value = "";
          email.value = "";
          msg.value="";
        })
        .catch(error => console.log(error));


      console.log("submit pressed");
      console.log(name.value);
      console.log(msg.value);
    });

      
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



