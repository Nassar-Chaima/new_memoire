/* let icon = document.querySelector('#action_btn');
let page = document.querySelector('.page');

function ouvrir() {
    document.querySelector('.action').style.borderRadius = "45px";
    document.querySelector('.action').style.width = "260px";
    document.querySelector('.accueil').style.left = "275px";
    document.querySelector('hr').style.width = "140px" ;
}

function fermer() {
    document.querySelector('.action').style.borderRadius = "250px";
    document.querySelector('.action').style.width = "80px";
    document.querySelector('.accueil').style.left = "95px";
    document.querySelector('hr').style.width = "40px" ;
}

            icon.addEventListener("click", ouvrir); */

/*---------pour l'heure------------
setInterval(() =>{
    let date = new Date()
    let clock = document.getElementById('clock')
    clock.innerHTML = date.getHours()+":"+
                      date.getMinutes()+":"+
                      date.getSeconds()
});  */
let plus_info = document.querySelector('#plus') ;
let nv_patient = document.querySelector('#patient_nv');
function afficher() {
    document.querySelector('.medecin') .style.display = "flex";
    document.querySelector('.secretaire').style.display = "none";
}
plus_info.addEventListener("click", afficher); 
function ouvrir() {
    document.querySelector('.form_nv_patient') .style.display = "flex";
}
nv_patient.addEventListener("click", ouvrir); 