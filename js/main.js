const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t){root.setAttribute('data-theme',t);localStorage.setItem('bim-theme',t);}
const saved = localStorage.getItem('bim-theme');
const sysPref = window.matchMedia('(prefers-color-scheme:light)').matches;
applyTheme(saved||(sysPref?'light':'dark'));
themeToggle.addEventListener('click',()=>{
  applyTheme(root.getAttribute('data-theme')==='dark'?'light':'dark');
});
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click',()=>{
  const o = navLinks.classList.toggle('is-open');
  burger.setAttribute('aria-expanded',o);
});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('is-open')));
document.getElementById('year').textContent = new Date().getFullYear();
const reveals = document.querySelectorAll('.about__grid,.services__grid,.projects__grid,.testimonials__grid,.cta__inner');
reveals.forEach(el=>el.classList.add('reveal'));
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target);}}); 
},{threshold:.12});
reveals.forEach(el=>obs.observe(el));
