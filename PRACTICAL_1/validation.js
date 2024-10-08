document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    let valid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        valid = false;
    }

    if (!phone) {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        valid = false;
    }

    const phonePattern = /^[6789]\d{9}$/;
    if (!phone) {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        valid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'It must be a 10-digit number';
        valid = false;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');

        const queryString = `?name=${name}&email=${email}&phone=${phone}`;

        window.location.href = 'home.html' + queryString;

        errors.forEach(error => error.textContent = '');
    

     
    }
});



document.getElementById('name').addEventListener("input", () => {
    const inputValue = document.getElementById('name').value;
    if (inputValue.length>2){
        document.getElementById('nametick').style.visibility="visible";
    }
    else{
        document.getElementById('nametick').style.visibility="hidden";

    }
});



document.getElementById('email').addEventListener("input", () => {
    const inputValue = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(inputValue)) {
        document.getElementById('emailtick').style.visibility="visible";
    }
    else{
        document.getElementById('emailtick').style.visibility="hidden";

    }
});




document.getElementById('phone').addEventListener("input", () => {
    const inputValue = document.getElementById('phone').value;
    const phonePattern = /^\d{9}$/;

    if (phonePattern.test(inputValue)) {
        document.getElementById('numbertick').style.visibility="visible";
    }
    else{
        document.getElementById('numbertick').style.visibility="hidden";

    }
});

function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  function containsLowercase(str) {
    return /[a-z]/.test(str);
  }
  function containsNumber(str) {
    return /\d/.test(str);
  }
  
document.getElementById('password').addEventListener("input", () => {
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmPassword').value;
    if (password==confirmpassword && password!="" && confirmpassword!=""){
        document.getElementById('passwordtick').style.visibility="visible";
        document.getElementById('confirmPasswordtick').style.visibility="visible";
    }else{
        document.getElementById('passwordtick').style.visibility="hidden";
        document.getElementById('confirmPasswordtick').style.visibility="hidden";
    }

    if (password.length >=16){
        document.getElementById('validation4').style.display="inline";
    }
    else{
        document.getElementById('validation4').style.display="none";

    }
    if (containsUppercase(password)){
        document.getElementById('validation1').style.display="inline";

    }
    else{
        document.getElementById('validation1').style.display="none";

    }

    if (containsLowercase(password)){
        document.getElementById('validation2').style.display="inline";

    }else{
        document.getElementById('validation2').style.display="none";

    }
    if (containsNumber(password)){
        document.getElementById('validation3').style.display="inline";

    }else{
        document.getElementById('validation3').style.display="none";

    }
});


document.getElementById('confirmPassword').addEventListener("input", () => {
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmPassword').value;
    if (password==confirmpassword && password!="" && confirmpassword!=""){
        document.getElementById('passwordtick').style.visibility="visible";
        document.getElementById('confirmPasswordtick').style.visibility="visible";
    }
    else{
        document.getElementById('passwordtick').style.visibility="hidden";
        document.getElementById('confirmPasswordtick').style.visibility="hidden";
    }

});






const profileIcon = document.getElementById('profile_image');
const fileInput = document.getElementById('profile_upload');

profileIcon.addEventListener('click', () => {
    fileInput.click(); 
});

fileInput.addEventListener('change', (event) => {
    const fileName = event.target.files[0]?.name || 'No file selected';
    profileIcon.setAttribute('src', fileName)
  
});




