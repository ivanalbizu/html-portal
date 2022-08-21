// Detecta si la página está en un host con Portals
if (window.portalHost) {
  document.body.classList.add('portal-frame')
  const close = document.querySelector('.close');
  close.style.display = 'none';
  window.addEventListener('portalactivate', (event) => {
    close.style.display = 'block'
    document.body.classList.remove('portal-frame')
  });
}

const ioHandlerMarkup = (entries, observer) => {
  for (let entry of entries) {
    const target = entry.target;
    if (entry.intersectionRatio >= .8) {
      target.classList.add('in-viewport');
      observer.unobserve(target);
    }
  }
}

const ioConfigMarkup = {
  threshold: .8
}
const markups = document.querySelectorAll('.section');

const markupAnimate = new IntersectionObserver(ioHandlerMarkup, ioConfigMarkup);

markups.forEach(markup => markupAnimate.observe(markup));
