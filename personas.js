// Persona switcher and counter animation for the Build Register marketing page.
// Extracted from inline <script> so the page can run under a strict CSP
// (script-src 'self' — no 'unsafe-inline').
//
// Headlines use a node-tree representation rather than HTML strings so we never
// need innerHTML on user-derived data (defense in depth: even though the data
// here is hardcoded, the pattern means future edits cannot accidentally
// reintroduce an XSS sink).
//
// Persona model (v2 — GTM blueprint April 2026):
//   developer   — Real Estate Developer (CEO / COO / Director of Ops)
//   contractor  — Main Contractor / Construction Company (CEO, PM, Project Director)
//   fm          — Facilities Manager / FM Operator
//   pm          — Property Manager / Maintenance Management Company
//   investor    — Pre-seed / seed investor
//   cofounder   — Technical co-founder

(function () {
  'use strict';

  const PERSONAS = {
    developer: {
      headline: [
        { text: 'Handover the building.' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text-purple', text: 'Defend it for ten years.' }
      ],
      sub: 'Most jurisdictions keep you liable for a decade or more after handover. Build Register turns every project into a property asset passport you control — every snag, every photo, every sign-off anchored on-chain — so when the dispute, the audit, or the portfolio sale comes five years from now, the record is intact and instantly verifiable.',
      cta1: { text: 'Book a Handover Audit →', href: 'mailto:info@build-register.com?subject=Handover%20Audit%20%E2%80%94%20Developer', target: null },
      cta2: { text: 'See the architecture →', href: '#handover' }
    },
    contractor: {
      headline: [
        { text: 'Walk away with retention.' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text', text: 'Not residual risk.' }
      ],
      sub: '"I never got that snag." "Where\'s the photo?" "The vendor\'s number changed." Retention battles and assignment fights all turn on paperwork nobody can find. Handover an on-chain record where every snag has a photo, a vendor, and a sign-off — get retention released faster, defend assignments years later, win the next bid because your handover packs are demonstrably better.',
      cta1: { text: 'Get the Handover Pack Comparison →', href: 'mailto:info@build-register.com?subject=Handover%20Pack%20Comparison%20%E2%80%94%20Contractor', target: null },
      cta2: { text: 'Try the live dashboard →', href: 'https://app.build-register.com', target: '_blank' }
    },
    fm: {
      headline: [
        { text: 'Stop paying out-of-pocket' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text-cyan', text: 'for things that were warranted.' }
      ],
      sub: 'Reactive jobs are won or lost on whether you can prove coverage. Walk into every breakdown with verified warranty status, the original snag history, the vendor obligation chain, and the handover photos — all in one click. Hand the record back to the owner in minutes when the contract ends.',
      cta1: { text: 'Run a Coverage Recovery Pilot →', href: 'mailto:info@build-register.com?subject=Coverage%20Recovery%20Pilot%20%E2%80%94%20FM', target: null },
      cta2: { text: 'Try the live dashboard →', href: 'https://app.build-register.com', target: '_blank' }
    },
    pm: {
      headline: [
        { text: 'Renew the mandate.' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text-cyan', text: 'Or hand it over in minutes.' }
      ],
      sub: 'Owner audits, contract renewals, end-of-mandate transitions: the moments your reputation is decided. Build Register gives you a verifiable record of every promise kept — and a single-transaction handover when the mandate ends, with zero email war.',
      cta1: { text: 'See the Mandate-Transition Demo →', href: 'mailto:info@build-register.com?subject=Mandate%20Transition%20Demo%20%E2%80%94%20PM', target: null },
      cta2: { text: 'See the wedge →', href: '#trust' }
    },
    investor: {
      headline: [
        { text: 'The non-custodial wedge in a' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text-purple', text: '$13T custodial industry.' }
      ],
      sub: 'Pre-seed. Smart contracts deployed. MVP live and writing on-chain today. The only construction-record system where the customer holds the records and we hold nothing — and where a 25-year warranty file transfers in minutes when the keys change hands.',
      cta1: { text: 'View Traction →', href: '#traction', target: null },
      cta2: { text: 'Talk to the Founder →', href: 'mailto:info@build-register.com?subject=Investor%20Intro' }
    },
    cofounder: {
      headline: [
        { text: 'The contracts are deployed.' },
        { tag: 'br' },
        { tag: 'span', cls: 'gradient-text', text: 'Build the category with me.' }
      ],
      sub: '7 Solidity contracts live on Nexus Testnet. React + Vite + ethers.js dashboard deployed. The wedge is non-custodial property records — defensible by architecture, not feature list. Looking for a technical co-founder who wants to own the codebase.',
      cta1: { text: 'See the Tech Stack →', href: '#traction', target: null },
      cta2: { text: 'Apply (Loom + GitHub) →', href: 'mailto:info@build-register.com?subject=Cofounder%20Application' }
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
        if (p.cta2.target) {
          cta2.setAttribute('target', p.cta2.target);
          cta2.setAttribute('rel', 'noopener noreferrer');
        } else {
          cta2.removeAttribute('target');
          cta2.removeAttribute('rel');
        }

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
