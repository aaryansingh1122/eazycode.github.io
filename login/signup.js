document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput = () =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0,input.maxLength);
    };
});
function validation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var usercheck = /^[A-Za-z. ]{3,20}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var emailcheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var mobilecheck = /^[789][0-9]{9}$/;

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
        document.getElementById('passworderror').innerHTML = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)')";
        return false;
    }

    if (cpassword.match(password)) {
        document.getElementById('cpassworderror').innerHTML = "";
    }
    else {
        document.getElementById('cpassworderror').innerHTML = "**Password Not Matched";
        return false;
    }

    if (emailcheck.test(email)) {
        document.getElementById('emailerror').innerHTML = "";
    }
    else {
        document.getElementById('emailerror').innerHTML = "**Invalid Email";
        return false;
    }
    if (mobilecheck.test(phone)) {
        document.getElementById('phoneerror').innerHTML = "";
    }
    else {
        document.getElementById('phoneerror').innerHTML = "**Invalid Number";
        return false;
    }
}