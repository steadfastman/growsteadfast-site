
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('[data-nav]');
if (navToggle && nav){
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path){ a.setAttribute('aria-current','page'); a.classList.add('active'); }
});
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    const fields = form.querySelectorAll('input[required], textarea[required], select[required]');
    let invalid = false;
    fields.forEach(f => {
      const wrapper = f.closest('.input');
      if (!f.checkValidity()){
        invalid = true;
        if (wrapper){ wrapper.classList.add('invalid'); }
      } else {
        if (wrapper){ wrapper.classList.remove('invalid'); }
      }
    });
    if (invalid){
      const first = form.querySelector('.input.invalid');
      if (first){ first.scrollIntoView({behavior:'smooth', block:'center'}); }
    }
  });
});
const yearEl = document.querySelector('[data-year]');
if (yearEl){ yearEl.textContent = new Date().getFullYear(); }
