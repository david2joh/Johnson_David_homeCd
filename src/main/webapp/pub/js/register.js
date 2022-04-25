const psswd = document.getElementById("password");
const confirm = document.getElementById("confirmPassword");
const msg = document.getElementById("message");


$('#registerForm').on("submit", function (event) {
    let passwordTest = (psswd.value === confirm.value);
    if (!passwordTest) {
        event.preventDefault();
        alert("password and confirm passwords do not match");
    } else {
        msg.style.color = 'green';
        $('#message').text("Registration Successful");
    }
})

function validate() {
}

const check = () => {
    if (psswd.value == confirmPassword.value) {
        msg.style.color = 'green';
        msg.innerHTML = 'Password/Confirm match';
    } else {
        msg.style.color = 'red';
        msg.innerHTML = 'Password/Confirm do not match';
    }
}
