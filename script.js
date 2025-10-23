// LOGIN FORM
const loginForm = document.getElementById('loginForm');
const loginPage = document.getElementById('loginPage');
const languagePage = document.getElementById('languagePage');

loginForm.addEventListener('submit', function(e){
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // simple check (for demo)
  if(email && password){
    loginPage.style.display = 'none';
    languagePage.style.display = 'block';
  } else {
    alert('Please enter email and password');
  }
});

// LANGUAGE BUTTONS
function goToEnglish(){
  window.location.href = "english.html";
}

function goToRussian(){
  window.location.href = "russian.html";
}
