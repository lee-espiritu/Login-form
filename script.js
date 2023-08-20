//===================================== USERNAME COUNTER =========================
let username_form = document.getElementById("username");
let counter = document.getElementById("username-counter");
let userMaxLength = username_form.getAttribute("maxlength");
username_form.addEventListener('input', function(event){
    counter.innerText = userMaxLength - username_form.value.length;
});