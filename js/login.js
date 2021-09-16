let uname = document.querySelector("#username");
let psw = document.querySelector("#password");
let elMsg = document.querySelector('#feedback');
let elWelcome = document.querySelector('#welcome');

function checkUser() {

    if (this.value.length < 2) {
        elMsg.textContent = "Username must be longer than two(2) characters";
    } else {
        elMsg.textContent = '';
    }
}
function delay(){
    window.location.replace("index.html")
}

uname.addEventListener('blur', checkUser, false);

document.getElementById("submitButton").onclick = function login() {


    if (uname.value === "Admin" && psw.value === "Admin") {
        elWelcome.textContent = "Welcome to Movie Madness, " + uname.value;
        setTimeout(delay,2000);

    } else {

        alert("Incorrect or incomplete username or password");

    }

    return false;

}
uname.addEventListener("click", checkUser, false);