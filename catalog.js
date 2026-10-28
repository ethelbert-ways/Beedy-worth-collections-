/* Beedy Worth Collections: catalog page
   Renders the section chosen in the navbar, opens the style pop-up,
   converts prices between currencies, and draws the production timeline.
   Content lives in data.js, so you rarely need to edit this file. */
(function () {
  'use strict';

  var CFG = window.BWC_CONFIG;
  var CATS = window.BWC_CATALOG;
  if (!CFG || !CATS || !CATS.length) return;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var els = {
    header: $('#site-header'),
    grid: $('#grid'),
    title: $('#cat-title'),
    intro: $('#cat-intro'),
    count: $('#cat-count'),
    nav: $('#cat-nav'),
    navWrap: $('#nav-wrap'),
    navLinks: $all('#cat-nav a'),
    modal: $('#modal'),
    panel: $('#modal-panel'),
    scroll: $('#m-scroll'),
    media: $('#m-media'),
    mediaBg: $('#m-media-bg'),
    img: $('#m-img'),
    cat: $('#m-cat'),
    mTitle: $('#m-title'),
    desc: $('#m-desc'),
    price: $('#m-price'),
    rate: $('#m-rate'),
    cur: $('#m-cur'),
    contacts: $('#m-contacts'),
    bar: $('#m-bar'),
    av: $('#m-av'),
    time: $('#m-time'),
    closeBtn: $('#m-close')
  };

  var byId = {};
  CATS.forEach(function (c) { byId[c.id] = c; });

  var SYMBOL = { NGN: '₦', USD: '$', EUR: '€', GBP: '£' };
  var LEVEL_COLORS = ['#1f9d6b', '#6aa84f', '#e0a526', '#e07a26', '#d6336c'];

  var state = {
    cat: null,
    style: null,
    trigger: null,
    scrollY: 0,
    currency: (CFG.currency && CFG.currency.default) || 'NGN',
    rates: {},
    live: false,
    swapTimer: null
  };
  Object.keys((CFG.currency && CFG.currency.rates) || {}).forEach(function (k) { state.rates[k] = CFG.currency.rates[k]; });
  var fallbackRates = JSON.parse(JSON.stringify(state.rates));

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------ helpers */
  function teaser(text, max) {
    text = String(text || '').replace(/\s+/g, ' ').trim();
    if (text.length <= max) return text + '…';
    var cut = text.slice(0, max);
    var sp = cut.lastIndexOf(' ');
    if (sp > max * 0.6) cut = cut.slice(0, sp);
    return cut.replace(/[\s,;:.\-–—]+$/, '') + '…';
  }

  function formatNumber(v, dec) {
    try {
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v);
    } catch (e) {
      return v.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }

  function money(ngn, cur) {
    if (cur === 'NGN' || !state.rates[cur]) return SYMBOL.NGN + formatNumber(ngn, 0);
    return SYMBOL[cur] + formatNumber(ngn / state.rates[cur], 2);
  }

  function slugFromHash() {
    var h = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    return byId[h] ? h : CATS[0].id;
  }

  function svg(path, size, extra) {
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" ' + (extra || 'fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"') + ' aria-hidden="true">' + path + '</svg>';
  }
  var ICON_PLUS = svg('<path d="M12 5v14M5 12h14"/>', 18);
  var ICON_CALL = svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/>', 24);
  var ICON_WA = svg('<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/><path d="M9.2 8.6c0 3.3 2.9 6.2 6.2 6.2l.9-1.2-1.8-.9-.8.7c-.8-.4-1.8-1.3-2.2-2.2l.7-.8-.9-1.8z" fill="currentColor" stroke="none"/>', 24, 'fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"');

  /* ------------------------------------------------------------ nav state */
  function updateNavMore() {
    if (!els.nav || !els.navWrap) return;
    var more = els.nav.scrollWidth - els.nav.clientWidth - els.nav.scrollLeft > 6;
    els.navWrap.classList.toggle('has-more', more);
  }

  function centerActiveTab(link) {
    if (!link || !els.nav) return;
    if (els.nav.scrollWidth <= els.nav.clientWidth + 2) return;
    var left = link.offsetLeft - (els.nav.clientWidth - link.offsetWidth) / 2;
    if (els.nav.scrollTo) els.nav.scrollTo({ left: left, behavior: reduceMotion ? 'auto' : 'smooth' });
    else els.nav.scrollLeft = left;
  }

  /* ------------------------------------------------------------ cards */
  function buildCard(style, index) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'card';
    b.setAttribute('data-id', style.id);
    b.setAttribute('aria-haspopup', 'dialog');
    b.setAttribute('aria-label', 'View details: ' + style.title);

    var wrap = document.createElement('span');
    wrap.className = 'card-img';
    var img = new Image();
    img.alt = '';
    img.width = 640;
    img.height = 800;
    img.decoding = 'async';
    if (index > 7) img.loading = 'lazy';
    img.addEventListener('error', function () { wrap.classList.add('is-missing'); });
    img.src = style.image;
    wrap.appendChild(img);

    var plus = document.createElement('span');
    plus.className = 'card-plus';
    plus.innerHTML = ICON_PLUS;
    wrap.appendChild(plus);

    var text = document.createElement('span');
    text.className = 'card-text';
    text.textContent = teaser(style.description, 74);

    b.appendChild(wrap);
    b.appendChild(text);
    return b;
  }

  function fillGrid(cat) {
    var frag = document.createDocumentFragment();
    cat.styles.forEach(function (s, i) { frag.appendChild(buildCard(s, i)); });
    els.grid.innerHTML = '';
    els.grid.appendChild(frag);
  }

  function scrollToCatalog() {
    var stuck = els.header.offsetHeight - (window.matchMedia('(max-width: 899px)').matches ? 60 : 0);
    var top = els.grid.getBoundingClientRect().top + window.pageYOffset - stuck - 18;
    if (window.pageYOffset > top) window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function render(id, animate) {
    var cat = byId[id] || CATS[0];
    state.cat = cat;

    els.navLinks.forEach(function (a) {
      if (a.getAttribute('data-cat') === cat.id) {
        a.setAttribute('aria-current', 'page');
        centerActiveTab(a);
      } else {
        a.removeAttribute('aria-current');
      }
    });

    els.title.textContent = cat.name;
    els.intro.textContent = cat.intro || '';
    els.count.textContent = cat.styles.length;
    document.title = cat.name + ' | Beedy Worth Collections';

    clearTimeout(state.swapTimer);
    if (animate && !reduceMotion) {
      els.grid.classList.add('is-swapping');
      state.swapTimer = setTimeout(function () {
        fillGrid(cat);
        els.grid.classList.remove('is-swapping');
      }, 220);
    } else {
      els.grid.classList.remove('is-swapping');
      fillGrid(cat);
    }
    if (animate) scrollToCatalog();
  }

  /* ------------------------------------------------------------ price */
  function updatePrice() {
    var s = state.style;
    if (!s) return;
    var cur = state.currency;
    els.price.textContent = money(s.price, cur);

    $all('button', els.cur).forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-cur') === cur ? 'true' : 'false');
    });

    if (cur === 'NGN' || !state.rates[cur]) {
      els.rate.textContent = 'Prices are in Nigerian Naira.';
    } else {
      els.rate.textContent = 'Estimate: 1 ' + cur + ' ≈ ' + SYMBOL.NGN + formatNumber(state.rates[cur], 0) +
        (state.live ? ' (current rate).' : ' (approximate rate).');
    }
  }

  /* ------------------------------------------------------------ live exchange rates (optional) */
  function applyLiveRates(r) {
    state.rates = r;
    state.live = true;
    if (els.modal.classList.contains('is-open')) updatePrice();
  }

  function loadLiveRates() {
    if (!(CFG.currency && CFG.currency.useLiveRates) || !window.fetch) return;
    var KEY = 'bwc_rates_v1';
    try {
      var cached = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (cached && cached.rates && Date.now() - cached.t < 6 * 3600 * 1000) { applyLiveRates(cached.rates); return; }
    } catch (e) { /* storage unavailable */ }

    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 7000);
    fetch('https://open.er-api.com/v6/latest/NGN', ctrl ? { signal: ctrl.signal } : {})
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (j) {
        clearTimeout(timer);
        if (!j || !j.rates) return;
        var out = {};
        var good = 0;
        Object.keys(fallbackRates).forEach(function (k) {
          var perNaira = j.rates[k];
          if (perNaira > 0) {
            var v = 1 / perNaira;
            var fb = fallbackRates[k];
            if (v > fb / 3 && v < fb * 3) { out[k] = v; good++; }   // ignore absurd values
          }
        });
        if (good === Object.keys(fallbackRates).length) {
          applyLiveRates(out);
          try { localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), rates: out })); } catch (e) { /* ignore */ }
        }
      })
      .catch(function () { clearTimeout(timer); });
  }

  /* ------------------------------------------------------------ timeline */
  function levelInfo(av) {
    var table = CFG.availability || {};
    var keys = Object.keys(table).map(Number).sort(function (a, b) { return b - a; });
    if (!keys.length) return null;
    var best = keys[0];
    keys.forEach(function (k) { if (Math.abs(k - av) < Math.abs(best - av)) best = k; });
    return { key: best, rank: keys.indexOf(best), total: keys.length, data: table[best] };
  }

  function renderTimeline(av) {
    var info = levelInfo(Number(av));
    els.bar.innerHTML = '';
    if (!info) return;
    els.bar.style.gridTemplateColumns = 'repeat(' + info.total + ', 1fr)';
    var color = LEVEL_COLORS[Math.min(info.rank, LEVEL_COLORS.length - 1)];
    var on = info.total - info.rank;
    for (var i = 0; i < info.total; i++) {
      var s = document.createElement('span');
      if (i < on) { s.className = 'on'; s.style.setProperty('--level', color); }
      els.bar.appendChild(s);
    }
    els.av.textContent = info.data.label;
    els.time.textContent = 'Estimated production: ' + info.data.time;
    els.bar.setAttribute('aria-label', info.data.label + '. Estimated production time: ' + info.data.time + '.');
  }

  /* ------------------------------------------------------------ contacts */
  function renderContacts(style, cat) {
    var msg = 'Hello Beedy Worth Collections, I would like to enquire about the "' + style.title + '" (' + cat.name + ').';
    var html = '';
    (CFG.whatsappNumbers || []).forEach(function (n) {
      html += '<a class="contact-btn wa" target="_blank" rel="noopener noreferrer" href="https://wa.me/' + n.wa + '?text=' + encodeURIComponent(msg) + '">' +
        ICON_WA + '<span><small>WhatsApp</small>' + n.display + '</span></a>';
    });
    if (CFG.phone) {
      html += '<a class="contact-btn call" href="tel:' + CFG.phone.tel + '">' + ICON_CALL +
        '<span><small>Call</small>' + CFG.phone.display + '</span></a>';
    }
    els.contacts.innerHTML = html;
  }

  /* ------------------------------------------------------------ modal */
  function focusables() {
    return $all('a[href], button:not([disabled])', els.panel).filter(function (el) { return el.offsetParent !== null || el === els.closeBtn; });
  }

  function openModal(style, trigger) {
    state.style = style;
    state.trigger = trigger;

    els.media.classList.remove('is-missing');
    els.img.onerror = function () { els.media.classList.add('is-missing'); };
    els.img.src = style.image;
    els.img.alt = style.title;
    els.mediaBg.style.backgroundImage = 'url("' + String(style.image).replace(/"/g, '%22') + '")';
    els.cat.textContent = state.cat.name;
    els.mTitle.textContent = style.title;
    els.desc.textContent = style.description;
    renderContacts(style, state.cat);
    renderTimeline(style.availability);
    updatePrice();

    state.scrollY = window.pageYOffset;
    document.body.style.top = (-state.scrollY) + 'px';
    document.body.classList.add('modal-open');

    els.modal.removeAttribute('inert');
    els.modal.setAttribute('aria-hidden', 'false');
    els.scroll.scrollTop = 0;
    els.panel.scrollTop = 0;
    els.modal.classList.add('is-open');
    window.requestAnimationFrame(function () { els.closeBtn.focus({ preventScroll: true }); });
  }

  function closeModal() {
    if (!els.modal.classList.contains('is-open')) return;
    els.modal.classList.remove('is-open');
    els.modal.setAttribute('aria-hidden', 'true');
    els.modal.setAttribute('inert', '');

    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    var root = document.documentElement;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, state.scrollY);
    root.style.scrollBehavior = '';

    if (state.trigger && document.contains(state.trigger)) state.trigger.focus({ preventScroll: true });
    state.style = null;
  }

  /* ------------------------------------------------------------ events */
  els.grid.addEventListener('click', function (e) {
    var card = e.target.closest ? e.target.closest('.card') : null;
    if (!card) return;
    var id = card.getAttribute('data-id');
    var style = null;
    for (var i = 0; i < state.cat.styles.length; i++) {
      if (state.cat.styles[i].id === id) { style = state.cat.styles[i]; break; }
    }
    if (style) openModal(style, card);
  });

  els.modal.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-close]')) closeModal();
  });

  els.cur.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('button[data-cur]') : null;
    if (!b) return;
    state.currency = b.getAttribute('data-cur');
    updatePrice();
  });

  document.addEventListener('keydown', function (e) {
    if (!els.modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }
    if (e.key === 'Tab') {
      var f = focusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!els.panel.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    }
  });

  window.addEventListener('hashchange', function () { render(slugFromHash(), true); });
  els.nav.addEventListener('scroll', updateNavMore, { passive: true });
  window.addEventListener('resize', updateNavMore);

  /* ------------------------------------------------------------ start */
  render(slugFromHash(), false);
  updateNavMore();
  loadLiveRates();
})();
