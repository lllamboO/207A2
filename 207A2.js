const sr = ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
});

sr.reveal('.text' ,{delay:100, origin:'top'});
sr.reveal('.form-container form' ,{delay:600, origin:'left'});
sr.reveal('.home img', {delay:100, origin:'right'});

document.addEventListener("DOMContentLoaded", function(){
    const submitbtn = document.querySelector("#submitbtn")

    submitbtn.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href="207A2submit.htm";
    })
})


// Functions to open and close sign up dialog
function openSignUpDialog() {
    var signUpDialog = document.getElementById("signUpDialog");
    signUpDialog.style.display = "block";
}

function closeSignUpDialog() {
    var signUpDialog = document.getElementById("signUpDialog");
    signUpDialog.style.display = "none";
}

// Functions to open and close sign in dialog
function openSignInDialog() {
    var signInDialog = document.getElementById("signInDialog");
    signInDialog.style.display = "block";
}

function closeSignInDialog() {
    var signInDialog = document.getElementById("signInDialog");
    signInDialog.style.display = "none";
}

// Functions to handle sign up and sign in actions
function signUp() {
    var userName = document.getElementById("signUpUserName").value;
    var password = document.getElementById("signUpPassword").value;
    
    console.log("Sign Up - User Name:", userName);
    console.log("Sign Up - Password:", password);
    
    closeSignUpDialog();
}

function signIn() {
    var userName = document.getElementById("signInUserName").value;
    var password = document.getElementById("signInPassword").value;
    // Perform sign in actions with userName and password
    // For example, you can send a request to the server
    console.log("Sign In - User Name:", userName);
    console.log("Sign In - Password:", password);
    // Close sign in dialog
    closeSignInDialog();
}


//rent now
function openCarDialog() {
    var cardialog = document.querySelector(".car1dialog");
    cardialog.style.display = "block";
}
function closeCar1Dialog() {
    var car1dialog = document.querySelector(".car1dialog");
    car1dialog.style.display = "none";
}

function submitCar() {
    closeCar1Dialog();
}


//return car
function openReturnCar(){
    var returnCarDialog = document.querySelector('.returnCar');
    returnCarDialog.style.display = 'block';
}
function closeReturnCar(){
    var returnCarDialog = document.querySelector('.returnCar');
    returnCarDialog.style.display = 'none';
}

function done(){
    closeReturnCar();
}
