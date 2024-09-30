var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent; // Use querySelector instead of querySelectorAll

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});

//show taggle
var sidenavbar=document.querySelector(".side-navbar")


function shownavbar()
{
   sidenavbar.style.left="0"
}

function closenavbar()
{
   sidenavbar.style.left="-60%"
}

