function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("emil").value;
    var password = document.getElementById("password").value;
    var text = document.getElementById("text");
    var passwordText = document.getElementById("passwordText");


    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(emailPattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "your email address is valid.";
        text.style.color = '#00ff00';
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "please Enter valid Email Address.";
        text.style.color = '#ff0000';
    }


    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.match(passwordPattern)) {
        passwordText.innerHTML = "Password is strong";
        passwordText.style.color = '#00ff00';
    } else {
        passwordText.innerHTML = "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
        passwordText.style.color = '#ff0000';
    }
}


document.getElementById("emil").addEventListener("keyup", validation);
document.getElementById("password").addEventListener("keyup", validation);\