let open_signup_box1 = document.querySelector('#lien_box1');
let open_signup_box3 = document.querySelector('#lien_box3');
let close_box2 = document.querySelector('#fermer_box2');
let close_box3 = document.querySelector('#fermer_box3');
let open_password = document.querySelector('#parag_password');
function signup() {
    document.querySelector('.box2').style.display = "flex";
    document.querySelector('.box1').style.display = "none";
    document.querySelector('.box3').style.display = "none";
}
function login() {
    document.querySelector('.box2').style.display = "none" ;
    document.querySelector('.box1').style.display = "flex" ;
    document.querySelector('.box3').style.display = "none";
}
function password() {
    document.querySelector('.box2').style.display = "none" ;
    document.querySelector('.box1').style.display = "none" ;
    document.querySelector('.box3').style.display = "flex";
}

open_signup_box1.addEventListener("click", signup);
open_signup_box3.addEventListener("click", signup);
open_password.addEventListener("click", password);
close_box2.addEventListener("click", login);
close_box3.addEventListener("click", login);