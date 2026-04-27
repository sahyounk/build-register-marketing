// Persona switcher and counter animation for the Build Register marketing page.
// Extracted from inline <script> so the page can run under a strict CSP
// (script-src 'self' — no 'unsafe-inline').
//
// Headlines use a node-tree representation rather than HTML strings so we never
// need innerHTML on user-derived data (defense in depth: even though the data
// here is hardcoded, the pattern means future edits cannot accidentally
// reintroduce an XSS sink).

(function () {
  'use strict';

  const PERSONAS = {
    investor: {
      headline: [
        { text: 'The trust infrastructure for' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text-purple', text: 'construction.' }
      ],
      sub: 'Pre-seed stage. Smart contracts deployed. MVP live. $13T market with zero dominant platform. Seeking co-investors and the right co-founders to build the category.',
      cta1: { text: 'View Traction →', href: '#traction', target: null },
      cta2: { text: 'Talk to the Founder →', href: 'mailto:info@build-register.com' }
    },
    builder: {
      headline: [
        { text: 'Help build the trust layer for' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text', text: 'construction.' }
      ],
      sub: '7 Solidity contracts live on Nexus Testnet. React + Vite + ethers.js dashboard deployed. We need a technical co-founder who wants to own the architecture and build the category.',
      cta1: { text: 'View the Tech Stack →', href: '#traction', target: null },
      cta2: { text: 'Join the Team →', href: '#team' }
    },
    client: {
      headline: [
        { text: 'One registry for all your' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text-cyan', text: 'construction warranties.' }
      ],
      sub: 'Replace scattered PDFs with on-chain warranty records. Track claims, verify coverage, and build trust with property owners, operators, and insurers — from handover through the full lifecycle.',
      cta1: { text: 'Try the Live Dashboard →', href: 'https://app.build-register.com', target: '_blank' },
      cta2: { text: 'Request a Demo →', href: 'mailto:info@build-register.com' }
    }
  };

  function renderHeadline(el, parts) {
    // Build the headline as DOM nodes — no innerHTML.
    while (el.firstChild) el.removeChild(el.firstChild);
    for (const p of parts) {
      if (p.tag === 'br') {
        el.appendChild(document.createElement('br'));
      } else if (p.tag) {
        const node = document.createElement(p.tag);
        if (p.cls) node.className = p.cls;
        if (p.text) node.textContent = p.text;
        el.appendChild(node);
      } else if (p.text) {
        el.appendChild(document.createTextNode(p.text));
      }
    }
  }

  function setupPersonaSwitcher() {
    const headline = document.getElementById('hero-headline');
    const sub = document.getElementById('hero-sub');
    const ctasEl = document.getElementById('hero-ctas');
    const cta1 = document.getElementById('hero-cta1');
    const cta2 = document.getElementById('hero-cta2');
    const btns = document.querySelectorAll('.persona-btn');

    if (!headline || !sub || !ctasEl || !cta1 || !cta2) return;

    function switchPersona(key) {
      const p = PERSONAS[key];
      if (!p) return;

      const els = [headline, sub, ctasEl];
      els.forEach(el => el.classList.add('out'));

      setTimeout(() => {
        renderHeadline(headline, p.headline);
        sub.textContent = p.sub;

        cta1.textContent = p.cta1.text;
        cta1.href = p.cta1.href;
        if (p.cta1.target) {
          cta1.setAttribute('target', p.cta1.target);
          cta1.setAttribute('rel', 'noopener noreferrer');
        } else {
          cta1.removeAttribute('target');
          cta1.removeAttribute('rel');
        }

        cta2.textContent = p.cta2.text;
        cta2.href = p.cta2.href;

        els.forEach(el => el.classList.remove('out'));
        btns.forEach(b => b.classList.toggle('active', b.dataset.persona === key));
      }, 290);
    }

    btns.forEach(btn => {
      btn.addEventListener('click', () => switchPersona(btn.dataset.persona));
    });
  }

  function setupCounterAnimation() {
    function animCount(el, target) {
      let n = 0;
      const step = Math.max(1, Math.ceil(target / 22));
      const t = setInterval(() => {
        n = Math.min(n + step, target);
        el.textContent = n;
        if (n >= target) clearInterval(t);
      }, 48);
    }

    const statsBar = document.querySelector('.chain-stats');
    if (!statsBar) return;

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.stat-number').forEach(el => {
            const v = parseInt(el.textContent, 10);
            if (!isNaN(v)) animCount(el, v);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.6 });

    obs.observe(statsBar);
  }

  // The script tag is loaded with `defer`, so the DOM is parsed by the time
  // this runs — but guard against being included without `defer` too.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupPersonaSwitcher();
      setupCounterAnimation();
    });
  } else {
    setupPersonaSwitcher();
    setupCounterAnimation();
  }
})();
