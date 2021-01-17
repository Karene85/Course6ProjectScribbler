var signUpModal = document.getElementById("sign-up-modal");
var signInModal = document.getElementById("sign-in-modal");    

function openSignUpModal() {

  signUpModal.style.display = "block";
  if (signInModal.style.display == "block") {
    signInModal.style.display = "none";
  }
}  

function openSignInModal() {
  signInModal.style.display = "block";
}  

function closeSignInModal() {
  signInModal.style.display = "none";
}  

function closeSignUpModal() {
  signUpModal.style.display = "none";
} 

window.onclick = function(event) {  
  
  var createPostModal = document.getElementById('create-post-modal');
  if (event.target == signUpModal) {
      signUpModal.style.display = "none";
  }
  else if (event.target == signInModal) {
      signInModal.style.display = "none";
  }
  else if (event.target == createPostModal) {
    createPostModal.style.display = "none";
}
}





  