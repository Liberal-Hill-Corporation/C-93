const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function signup(){
  var usernameSUp = document.getElementById("usernameSUp").value;
  var emailSUp = document.getElementById("emailSUp").value;
  var passwordSUp = document.getElementById("passwordSUp").value;

  localStorage.setItem("username",usernameSUp);
  localStorage.setItem("email",emailSUp);
  localStorage.setItem("password",passwordSUp);

  window.location("site.html");
}

function signin(){
  var emailSIn = document.getElementById("emailSIp").value;
  var passwordSIn = document.getElementById("passwordSIp").value;

  var LSemail = localStorage.getItem("email");
  var LSpassword = localStorage.getItem("password");

  if((emailSIn == LSemail) &&(passwordSIn == LSpassword)){
    window.location("site.html");
  }
}