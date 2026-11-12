/* ============================================================
   main.js — Shared utilities (premium · Lucide icons)
   ============================================================ */

const FAV_KEY = 'petsphere_favourites';

/* ── Favourites ───────────────────────────────────────────── */
function getFavourites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch { return []; }
}
function saveFavourites(ids) { localStorage.setItem(FAV_KEY, JSON.stringify(ids)); }
function isFavourite(id) { return getFavourites().includes(id); }
function toggleFavourite(id) {
  let favs = getFavourites();
  if (favs.includes(id)) favs = favs.filter(f => f !== id);
  else favs.push(id);
  saveFavourites(favs);
  updateFavCount();
  return favs.includes(id);
}
function updateFavCount() {
  const c = getFavourites().length;
  document.querySelectorAll('.fav-count').forEach(el => {
    el.textContent = c;
    el.classList.toggle('show', c > 0);
  });
}

/* ── Inline SVG helpers (used inside dynamically inserted HTML) ─ */
/* Using raw SVG so Lucide.createIcons() isn't needed for cards */
const SVG = {
  heart:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFill:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  mapPin:   `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  cake:     `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>`,
  user:     `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  arrowRight:`<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  bookmark: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  bookmarkFill:`<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  check:    `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
};

/* ── Category config ─────────────────────────────────────── */
function getCatIcon(cat) {
  const icons = {
    dogs:    'dog', cats:    'cat', rabbits: 'rabbit',
    parrots: 'bird', fish:   'fish', turtles: 'turtle-2',
  };
  return icons[cat] || 'paw-print';
}
function getCatLabel(cat) {
  return { dogs:'Dog', cats:'Cat', rabbits:'Rabbit', parrots:'Parrot', fish:'Fish', turtles:'Turtle' }[cat] || cat;
}

/* ── Build Pet Card (inline SVG for dynamic injection) ────── */
function buildPetCard(pet) {
  const fav = isFavourite(pet.id);
  const sClass = 'status-' + pet.status.toLowerCase().replace(/\s+/g, '-');
  return `
    <article class="pet-card reveal" data-id="${pet.id}" data-category="${pet.category}" data-age="${pet.age}" data-gender="${pet.gender.toLowerCase()}">
      <div class="pet-card-img-wrap">
        <img class="pet-card-img" src="${pet.image}" alt="${pet.name} — ${pet.breed}"
             loading="lazy"
             onerror="this.onerror=null;this.src='${pet.fallback}'">
        <span class="pet-card-badge">${getCatLabel(pet.category)}</span>
        <span class="pet-card-status ${sClass}">${pet.status}</span>
        <button class="fav-btn ${fav ? 'active' : ''}" aria-label="Toggle favourite"
                onclick="handleFavBtn(this,'${pet.id}')">
          ${fav ? SVG.heartFill : SVG.heart}
        </button>
      </div>
      <div class="pet-card-body">
        <h3 class="pet-card-name">${pet.name}</h3>
        <p class="pet-card-breed">${pet.breed}</p>
        <div class="pet-card-meta">
          <span class="pet-meta-item">${SVG.cake} ${pet.ageLabel}</span>
          <span class="pet-meta-item">${SVG.user} ${pet.gender}</span>
        </div>
        <p class="pet-card-location">${SVG.mapPin} ${pet.location}</p>
        <div class="pet-card-footer">
          <a href="pet-details.html?id=${pet.id}" class="btn btn-green btn-sm">View Details ${SVG.arrowRight}</a>
          <button class="btn btn-glass btn-sm icon-only-btn" aria-label="${fav ? 'Remove favourite' : 'Save to favourites'}"
                  onclick="handleFavBtn(this,'${pet.id}',true)">
            ${fav ? SVG.bookmarkFill : SVG.bookmark}
          </button>
        </div>
      </div>
    </article>`;
}

/* ── Fav button handler ───────────────────────────────────── */
function handleFavBtn(el, id, isTextBtn) {
  const wasAdded = isFavourite(id);
  toggleFavourite(id);
  const added = !wasAdded;

  document.querySelectorAll(`.pet-card[data-id="${id}"] .fav-btn`).forEach(btn => {
    btn.classList.toggle('active', added);
    btn.innerHTML = added ? SVG.heartFill : SVG.heart;
  });
  document.querySelectorAll(`.pet-card[data-id="${id}"] .icon-only-btn`).forEach(btn => {
    btn.innerHTML = added ? SVG.bookmarkFill : SVG.bookmark;
  });

  const petName = (getPetById(id) || {}).name || 'Pet';
  showToast(added ? `${petName} saved to favourites` : 'Removed from favourites', added ? 'success' : 'info');
}

/* ── Toast ────────────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  let t = document.getElementById('ps-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'ps-toast';
    t.style.cssText = `
      position:fixed;bottom:32px;right:32px;z-index:9999;
      padding:14px 22px;border-radius:16px;
      font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;
      color:white;box-shadow:0 12px 40px rgba(0,0,0,0.18);
      transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);
      transform:translateY(120px);opacity:0;
      border:1px solid rgba(255,255,255,0.2);
      backdrop-filter:blur(8px);
      display:flex;align-items:center;gap:8px;
    `;
    document.body.appendChild(t);
  }
  const bg = type === 'success' ? 'linear-gradient(135deg,#3D7A5C,#2A5940)'
           : type === 'error'   ? 'linear-gradient(135deg,#e74c3c,#c0392b)'
           : 'linear-gradient(135deg,#5A5A8A,#3A3A6A)';
  t.style.background = bg;
  t.textContent = msg;
  t.style.transform = 'translateY(0)';
  t.style.opacity = '1';
  clearTimeout(t._t);
  t._t = setTimeout(() => {
    t.style.transform = 'translateY(120px)';
    t.style.opacity = '0';
  }, 2800);
}

/* ── Scroll Reveal ────────────────────────────────────────── */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
    el.style.transitionDelay = (i % 5) * 80 + 'ms';
    obs.observe(el);
  });
}

/* ── Animated number counter ─────────────────────────────── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const isFloat = !Number.isInteger(target);
    const duration = 1600;
    const start = performance.now();
    const update = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const val = isFloat ? (target * ease).toFixed(1) : Math.round(target * ease);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  });
}

/* ── Navbar ───────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 40), { passive: true });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }));
  }

  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || (page === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
  updateFavCount();
}

/* ── Counter observer ─────────────────────────────────────── */
function initCounters() {
  if (!('IntersectionObserver' in window)) { animateCounters(); return; }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounters(); obs.disconnect(); } });
  }, { threshold: 0.3 });
  const el = document.querySelector('.hero-stats-row, .stats-row');
  if (el) obs.observe(el);
}

/* ── Card 3D tilt ─────────────────────────────────────────── */
function initTilt() {
  document.querySelectorAll('.pet-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-10px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ── Helpers ──────────────────────────────────────────────── */
function capitalise(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

/* ── DOMContentLoaded ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  if (window.lucide) lucide.createIcons();
  setTimeout(() => { initScrollReveal(); }, 100);
  initCounters();
});
