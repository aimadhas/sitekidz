// scroll bar
let body = document.body
let lastscrol = 0;
window.onscroll = function(){
    const curentscrol = window.pageYOffset
    if(curentscrol > lastscrol){
    body.classList.add("scroll-down")
    }
    if(curentscrol < lastscrol){
    body.classList.remove("scroll-down")
    }
    lastscrol = curentscrol
}
// header
let menu = document.querySelector(".fa-bars")
let nav = document.getElementById("nav")
let a = document.getElementById("inoo")
let a1 = document.getElementById("inoo1")
let a2 = document.getElementById("inoo2")
menu.onclick = function(){
    nav.classList.toggle("nav-show")
    a.classList.toggle("nav-toggle2")
    a1.classList.toggle("nav-toggle2")
    a2.classList.toggle("nav-toggle2")
    if (nav.classList.contains("nav-show")){
        menu.classList.replace("fa-bars","fa-xmark")
    }
    else{
        menu.classList.replace("fa-xmark","fa-bars")
    }
}
a.onclick = function(){
    nav.classList.remove("nav-show")
    a.classList.toggle("nav-toggle2")
    a1.classList.toggle("nav-toggle2")
    a2.classList.toggle("nav-toggle2")
    menu.classList.replace("fa-xmark","fa-bars")
}
a1.onclick = function(){
    nav.classList.remove("nav-show")
    a.classList.toggle("nav-toggle2")
    a1.classList.toggle("nav-toggle2")
    a2.classList.toggle("nav-toggle2")
    menu.classList.replace("fa-xmark","fa-bars")
}
a2.onclick = function(){
    nav.classList.remove("nav-show")
    a.classList.toggle("nav-toggle2")
    a1.classList.toggle("nav-toggle2")
    a2.classList.toggle("nav-toggle2")
    menu.classList.replace("fa-xmark","fa-bars")
}
