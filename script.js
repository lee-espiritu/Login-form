//===================================== USERNAME COUNTER =========================
let username_form = document.getElementById("username");
let username_counter = document.getElementById("username-counter");
let username_max_length = username_form.getAttribute("maxlength");
username_form.addEventListener('input', function(event){
    username_counter.innerText = username_max_length - username_form.value.length;
});

//===================================== USERNAME COUNTER =========================
let password_form = document.getElementById("password");
let password_counter = document.getElementById("password-counter");
let password_max_length = password_form.getAttribute("maxlength");
password_form.addEventListener('input', function(event){
    password_counter.innerText = password_max_length - password_form.value.length;
});