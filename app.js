var formvalue = document.querySelector(".form-container")
var nameInput = document.getElementById("inputName")
var emailInput = document.getElementById("inputEmail")
var pwdInput = document.getElementById("inputPwd")
var submitBtn = document.getElementById("submit")




var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var pwdError = document.getElementById("pwdError")

formvalue.addEventListener("submit", function (event) {
    event.preventDefault()
    validateForm();
    alert("user has logged in successfully")
    nameInput.value = ""
    emailInput.value = ""
    pwdInput.value = ""
})

function validateForm() {
    var userName = nameInput.value.trim()
    var userEmail = emailInput.value.trim()
    var userPwd = pwdInput.value.trim()

    if (userName === "") {
        nameError.textContent = "Username Cannot be blank"
    }
    else {
        nameInput.classList.add("input-pass")
        nameError.textContent = ""
        console.log("working username input")
    }

    if (userEmail === "") {
        emailError.textContent = "Email Cannot be blank"
        console.log("working email input")
    }
    else if (!userEmail.includes("@") || !userEmail.includes(".com")) {
        emailError.textContent = "Please enter Valid Email address"
        console.log("working emailvalidation input")
    }
    else {
        emailInput.classList.add("input-pass")
        emailError.textContent = ""
    }

    if (userPwd === "") {
        pwdError.textContent = "Password Cannot be blank"
        console.log("pwd empty working fine")
    }
    else if (userPwd.length < 6) {
        pwdError.textContent = "Passeord length minimum 6 character"
        console.log("pwd empty minimum working fine")
    }
    else {
        pwdInput.classList.add("input-pass")
        pwdError.textContent = ""
        console.log("pwd correct working fine")
    }



    if (
        userName !== "" &&
        userEmail !== "" &&
        userPwd !== "" &&
        userEmail.includes("@") &&
        userEmail.includes(".com") &&
        userPwd.length >= 6
    ) {
        submitBtn.disabled = false
        submitBtn.classList.add("enable-btn")
        submitBtn.classList.remove("disable-btn")
        console.log("botton login working")
        console.log(submitBtn)

    }
    else {
        submitBtn.disabled = true
        submitBtn.classList.add("disable-btn")
        console.log(submitBtn)

    }
}

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
pwdInput.addEventListener("input", validateForm);

















