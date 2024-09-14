const users = [];

const formTitle = document.getElementById('form-title');
const nameFields = document.getElementById('name-fields');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const formButton = document.getElementById('form-button');
const toggleFormLink = document.getElementById('toggle-form');
const formToggleText = document.getElementById('form-toggle-text');
const formBox = document.getElementById('form-box');
const joinUsButton = document.getElementById('join-us-button');
const togglePassword = document.getElementById('toggle-password');

let isLogin = true; 

function toggleForm() {
    formBox.classList.add('slide-out');

    setTimeout(() => {
        if (isLogin) {
            formTitle.textContent = 'Sign Up Here';
            formButton.textContent = 'Sign Up';
            formToggleText.textContent = 'Already have an account?';
            toggleFormLink.textContent = 'Sign in here';
            nameFields.style.display = 'flex';
            joinUsButton.textContent = 'Sign In';
        } else {
            formTitle.textContent = 'Login Here';
            formButton.textContent = 'Login';
            formToggleText.textContent = "Don't have an account?";
            toggleFormLink.textContent = 'Sign up here';
            nameFields.style.display = 'none';
            joinUsButton.textContent = 'Join Us';
        }

        isLogin = !isLogin;
        formBox.classList.remove('slide-out');
        formBox.classList.add('slide-in');
    }, 300);
}
toggleFormLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleForm();
});
joinUsButton.addEventListener('click', () => {
    if (joinUsButton.textContent === 'JOIN US') {
        toggleForm();  
    } else if (joinUsButton.textContent === 'Sign In') {
        toggleForm();  
    }
});
formButton.addEventListener('click', () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (isLogin) {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            alert(`Login Successful! Welcome back, ${user.firstName} ${user.lastName}!`);
            location.href="homepage/home.html";
        } else {
            alert('Invalid email or password. Please try again.');
        }
    } 
    else { 
        if (firstName && lastName && email && password) {
            const userExists = users.some(u => u.email === email);
            if (!userExists) {
                users.push({ firstName, lastName, email, password });
                alert('Sign Up Successful!');
                toggleForm();  
            } else {
                alert('Email already exists. Please use a different email.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    }
});
togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    }
});
