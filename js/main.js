/* ============================
   MOBILE MENU
   ============================ */
const burger = document.querySelector('.nav-burger');
const mobileMenu = document.querySelector('.mobile-menu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    // Animate burger → X
    const spans = burger.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(3.5px) rotate(45deg)';
      spans[1].style.transform = 'translateY(-3.5px) rotate(-45deg)';
      document.body.style.overflow = 'hidden';
    } else {
      spans[0].style.transform = '';
      spans[1].style.transform = '';
      document.body.style.overflow = '';
    }
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.querySelectorAll('span').forEach(s => s.style.transform = '');
      document.body.style.overflow = '';
    });
  });
}

/* ============================
   FILTER
   ============================ */
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
        // Stagger reveal
        card.style.opacity = '0';
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.4s ease';
          card.style.opacity = '1';
        });
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ============================
   NAV SCROLL TINT
   ============================ */
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.background = 'rgba(8,8,8,0.95)';
    } else {
      nav.style.background = 'rgba(8,8,8,0.7)';
    }
  }, { passive: true });
}

/* ============================
   TICKER DUPLICATE (seamless loop)
   ============================ */
const tickerSpan = document.querySelector('.contact-ticker span');
if (tickerSpan) {
  // Duplicate content for seamless loop
  tickerSpan.textContent = tickerSpan.textContent.repeat(3);
}
