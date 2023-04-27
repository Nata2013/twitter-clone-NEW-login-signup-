//eye icon, signup button
const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})



//Validate code for inputs LOGIN 
let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let email_error = document.getElementById('email_error');
let pass_error = document.getElementById('pass_error');



email.addEventListener('emailInput',email_Verify);
password.addEventListener('passwordInput',pass_Verify);

function validated(){
  if(email.value.length < 9){
    email.style.border = "1px solid red";
    email.style.display = "block";
    email(focus);
    return false;
  }
  if(password.value.length < 8){
    password.style.border = "1px solid red";
    password.style.display = "block";
    password(focus);
    return false;
  }
}
function email_Verify(){
  if(email.value.length >= 8){
    email.style.border = "1px solid silver";
    email_error.style.display = "none"; 
    return true;
  }
}
function pass_Verify(){
  if(password.value.length >= 5){
    password.style.border = "1px solid silver";
    password.style.display = "none"; 
    return true;
  }
}