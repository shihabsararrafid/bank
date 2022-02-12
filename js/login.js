// addimg an eventhandler to the login button
document.getElementById('login-button').addEventListener('click', function () {
    const inputEmail = document.getElementById('input-email').value;
    const inputPassword = document.getElementById('input-password').value;

    if (inputEmail == "shrafid.532@gmail.com" && inputPassword == 1234567890) {
        window.location.href = "bank.html";
    }
    else {
        alert("Sorry, Your Information is not Valid");
    }
    document.getElementById('input-email').value = '';
    document.getElementById('input-password').value = '';
    document.getElementById('input-account').value = '';
})