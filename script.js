var sidenavbar=document.querySelector(".side-navbar")


function shownavbar()
{
   sidenavbar.style.left="0"
}

function closenavbar()
{
   sidenavbar.style.left="-60%"
}



var button = document.querySelector(".button");

button.addEventListener("click", function() {
    if (button.textContent === "Subscribe") {
        alert("Thank you for subscribing!");
        button.textContent = "Subscribed"; // Change button text
    }
});
