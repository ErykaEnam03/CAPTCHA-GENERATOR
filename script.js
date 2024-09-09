const display = document.getElementById("_status");
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let captcha = "";


function generateCaptcha() {
    const captchaLength = 6;
    captcha = ""; 
    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char[randomIndex];
    }

    document.getElementById("_generator").value = captcha;
    display.innerText = "Captcha Generator";
}

submit.onclick = function checkInput() {
    const input = document.getElementById("_client-text").value;

    if (input === "") {
        display.innerText = "Please Enter the text Shown below";
    } else if (input === captcha) {
        display.innerText = "Matched";
    } else {
        display.innerText = "Not Matched";
    }
};

refresh.onclick = function refreshCaptcha() {
    generateCaptcha(); 
};

window.onload = generateCaptcha;
