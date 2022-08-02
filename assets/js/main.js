/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const togle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(togle && nav){
        togle.addEventListener('click',()=>{
            navId.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //activo
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //remover el menu
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n=> n.addEventListener('click', linkAction));