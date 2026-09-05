const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput =
    document.getElementById("confirmPassword");

const successMessage =
    document.getElementById("successMessage");

const resetBtn =
    document.getElementById("resetBtn");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const phoneError =
    document.getElementById("phoneError");

const passwordError =
    document.getElementById("passwordError");

const confirmPasswordError =
    document.getElementById("confirmPasswordError");

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {
        showError(
            nameInput,
            nameError,
            "Name is required."
        );

        return false;
    }

    if (name.length < 3) {
        showError(
            nameInput,
            nameError,
            "Name must contain at least 3 characters."
        );

        return false;
    }

    showSuccess(nameInput, nameError);

    return true;
}

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        showError(
            emailInput,
            emailError,
            "Email is required."
        );

        return false;
    }

    if (!emailPattern.test(email)) {
        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        return false;
    }

    showSuccess(emailInput, emailError);

    return true;
}

function validatePhone() {

    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        showError(
            phoneInput,
            phoneError,
            "Phone number is required."
        );

        return false;
    }

    if (!phonePattern.test(phone)) {
        showError(
            phoneInput,
            phoneError,
            "Phone number must contain exactly 10 digits."
        );

        return false;
    }

    showSuccess(phoneInput, phoneError);

    return true;
}

function validatePassword() {

    const password = passwordInput.value;

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password === "") {
        showError(
            passwordInput,
            passwordError,
            "Password is required."
        );

        return false;
    }

    if (!passwordPattern.test(password)) {
        showError(
            passwordInput,
            passwordError,
            "Password must have 8+ characters, uppercase, lowercase and a number."
        );

        return false;
    }

    showSuccess(passwordInput, passwordError);

    return true;
}

function validateConfirmPassword() {

    const password = passwordInput.value;

    const confirmPassword =
        confirmPasswordInput.value;

    if (confirmPassword === "") {
        showError(
            confirmPasswordInput,
            confirmPasswordError,
            "Please confirm your password."
        );

        return false;
    }

    if (password !== confirmPassword) {
        showError(
            confirmPasswordInput,
            confirmPasswordError,
            "Passwords do not match."
        );

        return false;
    }

    showSuccess(
        confirmPasswordInput,
        confirmPasswordError
    );

    return true;
}

function showError(input, errorElement, message) {

    input.classList.remove("valid");

    input.classList.add("invalid");

    errorElement.textContent = message;
}

function showSuccess(input, errorElement) {

    input.classList.remove("invalid");

    input.classList.add("valid");

    errorElement.textContent = "";
}

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

phoneInput.addEventListener("input", validatePhone);

passwordInput.addEventListener("input", () => {

    validatePassword();

    if (confirmPasswordInput.value !== "") {
        validateConfirmPassword();
    }

});

confirmPasswordInput.addEventListener(
    "input",
    validateConfirmPassword
);

nameInput.addEventListener("blur", validateName);

emailInput.addEventListener("blur", validateEmail);

phoneInput.addEventListener("blur", validatePhone);

passwordInput.addEventListener(
    "blur",
    validatePassword
);

confirmPasswordInput.addEventListener(
    "blur",
    validateConfirmPassword
);

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid =
        validateConfirmPassword();

    if (
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid &&
        isConfirmPasswordValid
    ) {

        form.style.display = "none";

        successMessage.classList.add("show");

    }

});

resetBtn.addEventListener("click", () => {

    form.reset();

    form.style.display = "block";

    successMessage.classList.remove("show");

    const inputs =
        form.querySelectorAll("input");

    inputs.forEach((input) => {

        input.classList.remove("valid");
        input.classList.remove("invalid");

    });

    const errors =
        form.querySelectorAll(".error");

    errors.forEach((error) => {

        error.textContent = "";

    });

});