import "";

window.addEventListener("DOMContentLoaded", function(){
    let btnInfo = document.getElementById("Info");
    let btnUpdate = document.getElementById("Update");
    let btnDelete = document.getElementById("Delete");
    
fetch('https://kilyangerard.sites.3wa.io/PHP/res03-php-j19-api/api/users')
.then(response => response.json())
.then(data => {
console.log(data);
});
});