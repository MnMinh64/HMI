const signInForm = document.getElementById('signin-form');
const signUpForm = document.getElementById('signup-form');
const createAccountLink = document.getElementById('create-account-link');
const signInLink = document.getElementById('signin-link');
const forgotPassword = document.getElementById('forgot-password')

createAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

signInLink.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});

forgotPassword.addEventListener('click',(e) => {
    e.preventDefault();
    alert("This function is developing!");
})

function redirectToHome(event) {
    event.preventDefault(); // Ngăn chặn submit form
    window.location.href = '../home/index.html';
}