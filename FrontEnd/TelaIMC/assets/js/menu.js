const butmobile = document.getElementById('button_mob');
function Menutoggle(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
butmobile.addEventListener("click", Menutoggle);