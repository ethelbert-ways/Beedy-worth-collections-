/* Beedy Worth Collections: home page slideshow
   10 slides, 10 seconds each, cross-fading. Change DURATION to adjust timing. */
(function () {
  'use strict';

  var DURATION = 10000;   // time each slide stays on screen (ms)
  var FADE = 1700;        // keep the outgoing slide alive while it fades (ms)

  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));
  var stage = document.getElementById('stage');
  if (!slides.length) return;

  document.documentElement.style.setProperty('--slide-ms', DURATION + 'ms');

  var current = 0;
  var timer = null;

  function setDots(n) {
    dots.forEach(function (d, i) {
      d.classList.remove('is-active', 'is-done');
      d.removeAttribute('aria-current');
      if (i < n) d.classList.add('is-done');
    });
    var dot = dots[n];
    if (dot) {
      void dot.offsetWidth;                 // restart the progress animation
      dot.classList.add('is-active');
      dot.setAttribute('aria-current', 'true');
    }
  }

  function show(n, initial) {
    var next = (n + slides.length) % slides.length;
    var prev = current;
    if (!initial && next === prev) { restart(); return; }

    slides.forEach(function (s, i) {
      if (i === next) {
        clearTimeout(s._t);
        s.classList.remove('is-leaving');
        s.classList.add('is-active');
      } else if (i === prev && !initial) {
        s.classList.remove('is-active');
        s.classList.add('is-leaving');
        clearTimeout(s._t);
        s._t = setTimeout(function () { s.classList.remove('is-leaving'); }, FADE);
      } else {
        s.classList.remove('is-active');
      }
    });

    current = next;
    setDots(next);
    restart();
  }

  function restart() {
    clearTimeout(timer);
    if (document.hidden) return;
    timer = setTimeout(function () { show(current + 1); }, DURATION);
  }

  dots.forEach(function (d, i) {
    d.addEventListener('click', function () { show(i); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') show(current + 1);
    else if (e.key === 'ArrowLeft') show(current - 1);
  });

  /* swipe on touch screens */
  var startX = null;
  stage.addEventListener('touchstart', function (e) {
    startX = e.touches.length === 1 ? e.touches[0].clientX : null;
  }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 60) show(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* pause while the tab is hidden so the timing never drifts */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { clearTimeout(timer); }
    else { setDots(current); restart(); }
  });

  /* warm the cache so later slides fade in without a flash */
  window.addEventListener('load', function () {
    slides.forEach(function (s) {
      var bg = s.querySelector('.slide-bg');
      var m = bg && /url\(["']?(.*?)["']?\)/.exec(bg.style.backgroundImage || '');
      if (m && m[1]) { var img = new Image(); img.src = m[1]; }
    });
  });

  show(0, true);
})();
