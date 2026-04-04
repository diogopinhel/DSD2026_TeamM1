const scrollBtn = document.getElementById('scroll-btn');
const sring = document.getElementById('sring');
const C = 2 * Math.PI * 19;

window.addEventListener('scroll', () => {
  const top = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = h > 0 ? top / h : 0;

  if (sring) {
    sring.style.strokeDashoffset = C * (1 - p);
  }

  if (scrollBtn) {
    scrollBtn.classList.toggle('visible', top > 100);
  }
}, { passive: true });

if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach((a) => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (link) {
        link.classList.add('active');
      }
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('section[id]').forEach((s) => sectionObserver.observe(s));
