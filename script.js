document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Counters
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const n = Number(el.dataset.count || 0);
    let v = 0;
    const step = Math.max(1, Math.ceil(n / 30));
    const interval = setInterval(() => {
      v += step;
      if (v >= n) {
        v = n;
        clearInterval(interval);
      }
      if (n === 30) el.textContent = `${v}%`;
      else if (n === 4) el.textContent = `${v}+`;
      else if (n === 24) el.textContent = `${v}/7`;
      else el.textContent = String(v);
    }, 28);
  });
}, { threshold: 0.35 });
counters.forEach((el) => counterObserver.observe(el));

// Cert bars
const barWrap = document.querySelector('.bars');
if (barWrap) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      barWrap.querySelectorAll('span[data-w]').forEach((bar) => {
        bar.style.width = `${bar.dataset.w}%`;
      });
      barObserver.disconnect();
    });
  }, { threshold: 0.35 });
  barObserver.observe(barWrap);
}
