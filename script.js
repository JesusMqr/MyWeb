const btn_menu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');
const btn_close = document.getElementById('btn-nav-close');
const btn_sections = document.querySelectorAll('.btn-section');
const widthWindow = window.innerWidth;
function displayNav(){
    nav.style.display = 'flex';
    btn_close.style.display = 'block';
}

function closeNav(){
    nav.style.display = 'none';
    btn_close.style.display = 'none';   
}
btn_sections.forEach(btn_section=>{
    if(widthWindow < 1300){
        btn_section.addEventListener('click', closeNav);
    }
    
});

btn_close.addEventListener('click', closeNav);
btn_menu.addEventListener('click',displayNav);