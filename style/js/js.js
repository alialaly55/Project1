const activepage=window.location.pathname;
const navlink=document.querySelectorAll('header a').forEach(link=>{
    if(link.href.includes(`${activepage}`))
    {
        link.classList.add('active')
    }
})

const toggle=document.getElementsByClassName('toggel-menu')[0];

const nav=document.getElementsByClassName('nav_link')[0];
toggle.addEventListener('click',()=>{
    nav.classList.toggle('show')
})
