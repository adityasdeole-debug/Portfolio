const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
const backTop=document.querySelector('#backTop');
window.addEventListener('scroll',()=>backTop.classList.toggle('show',window.scrollY>500));
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
