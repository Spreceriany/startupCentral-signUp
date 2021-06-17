var btnContainer = document.getElementById("btn-switch");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("form-btn");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

const logInBtn = document.querySelector(".log-in");
const logInForm = document.querySelector(".login-form")
const signUpBtn = document.querySelector(".sign-up")
const signUpForm = document.querySelector(".layout-active")

logInBtn.addEventListener("click", ()=>{
    logInForm.classList.toggle("invisible")
    signUpForm.classList.toggle("invisible")
})

signUpBtn.addEventListener("click", ()=>{
    logInForm.classList.toggle("invisible")
    signUpForm.classList.toggle("invisible")
})
/*document.querySelector('.log-in').addEventListener('click', () =>{
    if(  loginForm.classlist.contains("hide"))
    {
        loginForm.classList.remove("hide")
    } else{
        loginForm.classList.add("hide")

    }
})*/