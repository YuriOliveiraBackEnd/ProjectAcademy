 // menu no mobile->
 const butmobile = document.getElementById('button_mob');
function Menutoggle(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
butmobile.addEventListener("click", Menutoggle);

// Slider->
let count=1;
document.getElementById("radio1").checked = true;
setInterval(function(){
    nextimg();
}, 5000)
function nextimg(){
    count++;
    if (count>5){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}