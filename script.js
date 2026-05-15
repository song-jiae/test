const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

/* =========================
   MENU OPEN
========================= */
if (hamburger && mobileNav && overlay) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
  });
}

/* =========================
   MENU CLOSE
========================= */
function closeMenu() {
  if (mobileNav && overlay) {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
  }
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeMenu);
}
if (overlay) {
  overlay.addEventListener('click', closeMenu);
}

/* =========================
   MOBILE ACCORDION
========================= */
document.querySelectorAll('.mobile-title').forEach((title) => {
  title.addEventListener('click', () => {
    const parent = title.parentElement;
    if (parent) {
      parent.classList.toggle('active');
    }
  });
});

/* =========================
   HEADER SCROLL EFFECT
========================= */
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
}

/* =========================
   GO TO TOP
========================= */
const goToTopBtn = document.querySelector('.go-to-top');

if (goToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 500) {
      goToTopBtn.classList.add('active');
    } else {
      goToTopBtn.classList.remove('active');
    }
  });

  goToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* =========================
   POPUP
========================= */
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');

if (popup && popupClose) {
  popup.style.display = 'block';

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}