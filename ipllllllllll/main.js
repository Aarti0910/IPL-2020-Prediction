//erensenell
function myFunction() {

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if(email == "admin@gmail.com" && password == "user")
{
    window.location.replace("upload.html");     

}
else {
   alert("Invalid information");
    return ;
}
}
