function validation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var usercheck = /^[A-Za-z. ]{3,20}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (usercheck.test(username)) {
        document.getElementById('usererror').innerHTML = "";
    }
    else {
        document.getElementById('usererror').innerHTML = "**Invalid Username";
        return false;
    }

    if (passwordcheck.test(password)) {
        document.getElementById('passworderror').innerHTML = "";
    }
    else {
        document.getElementById('passworderror').innerHTML = "**Invalid Password";
        return false;
    }

    if (emailcheck.test(email)) {
        document.getElementById('emailerror').innerHTML = "";
    }
    else {
        document.getElementById('emailerror').innerHTML = "**Invalid Email";
        return false;
    }
}