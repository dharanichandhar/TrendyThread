document.querySelector('.Contect').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const name = document.querySelector('.nameinput').value;
    const email = document.querySelector('.emailinput').value;
    const mobile = document.querySelector('.mobileinput').value;
    const location = document.querySelector('.locationinput').value;

    // Create a new table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${location}</td>
        <td><button class="delete">Delete</button></td>
    `;

    // Append the new row to the table body
    document.getElementById('CustomerData').appendChild(newRow);

    // Clear the form fields
    this.reset();

    // Add delete functionality
    newRow.querySelector('.delete').addEventListener('click', function () {
        newRow.remove();
    });
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



