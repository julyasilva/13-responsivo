const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');


btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    const expanded = btn.getAttribute('area-expanded') === 'True'
    btn.setAttribute('aria-expanded ', !expanded)
})
