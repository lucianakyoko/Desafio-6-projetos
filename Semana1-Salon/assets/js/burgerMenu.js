const btn = document.querySelector('.btn');

btn.addEventListener('click', toggleMenu);
btn.addEventListener('touchstart', toggleMenu);

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('.nav');
  const active = nav.classList.contains('active')
  
  nav.classList.toggle('active');
  
  if(active) {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    event.currentTarget.setAttribute('aria-expanded', 'false')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    event.currentTarget.setAttribute('aria-expanded', 'true')
  }

}