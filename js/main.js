document.querySelectorAll('a[href="#top"]').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault();
  window.scrollTo({top:0,behavior:'smooth'});
}));
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
},{threshold:0,rootMargin:"0px 0px -40px 0px"});
reveals.forEach(el=>obs.observe(el));

// Visor de imagenes de proyecto (solo existe en proyectos.html)
const lb = document.getElementById('lightbox');
if (lb) {
  const lbImg = document.getElementById('lightboxImg');
  const closeLb = () => { lb.hidden = true; document.body.style.overflow = ''; };
  document.querySelectorAll('.project-card__header--img').forEach(h => h.addEventListener('click', () => {
    const img = h.querySelector('img');
    lbImg.src = img.src; lbImg.alt = img.alt;
    lb.hidden = false; document.body.style.overflow = 'hidden';
  }));
  document.getElementById('lightboxClose').addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target !== lbImg) closeLb(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });
}
