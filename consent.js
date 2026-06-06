/**
 * PollSlide Cookie Consent & GDPR Notice
 * PollSlide Technologies LLC
 *
 * Include this script on every page of pollslide.com:
 *   <script src="/consent.js"></script>
 *
 * It will:
 * - Show a consent banner on first visit for EU/EEA users (and all new visitors)
 * - Remember the choice for 1 year in localStorage
 * - Expose window.PSConsent.accepted() for feature gates
 * - Add a "Cookie settings" link to the footer
 */
(function () {
  'use strict';

  const KEY = 'ps_cookieConsent';
  const KEY_DATE = 'ps_cookieConsentDate';
  const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;

  function getConsent() {
    try {
      const val = localStorage.getItem(KEY);
      const date = parseInt(localStorage.getItem(KEY_DATE) || '0', 10);
      if (!val || Date.now() - date > ONE_YEAR) return null; // expired or not set
      return val; // 'all' | 'necessary'
    } catch (e) { return null; }
  }

  function setConsent(val) {
    try {
      localStorage.setItem(KEY, val);
      localStorage.setItem(KEY_DATE, Date.now().toString());
    } catch (e) {}
  }

  // Public API
  window.PSConsent = {
    accepted: function () { return getConsent() === 'all'; },
    necessary: function () { return getConsent() !== null; },
    reset: function () {
      try { localStorage.removeItem(KEY); localStorage.removeItem(KEY_DATE); } catch (e) {}
      showBanner();
    }
  };

  function showBanner() {
    if (document.getElementById('ps-consent-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'ps-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML = `
      <div id="ps-consent-inner">
        <div id="ps-consent-text">
          <strong>We use cookies</strong>
          We use strictly necessary cookies to keep you signed in and remember your preferences.
          We don't use advertising or tracking cookies.
          <a href="/cookies" style="color:#8b84ff;text-decoration:underline;">Learn more</a>
        </div>
        <div id="ps-consent-btns">
          <button id="ps-btn-settings" onclick="window.PSConsent.showDetails()">Cookie settings</button>
          <button id="ps-btn-accept" onclick="window.PSConsent.acceptAll()">Accept</button>
        </div>
      </div>
    `;

    // Styles — injected once
    if (!document.getElementById('ps-consent-styles')) {
      const style = document.createElement('style');
      style.id = 'ps-consent-styles';
      style.textContent = `
        #ps-consent-banner {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 99999;
          background: #1a1a2c; border-top: 1px solid rgba(255,255,255,0.14);
          padding: 14px 24px; font-family: 'DM Sans', sans-serif;
          font-size: 14px; color: #f4f4fc; box-shadow: 0 -4px 24px rgba(0,0,0,0.4);
        }
        body.light #ps-consent-banner { background: #fff; border-top-color: rgba(0,0,0,0.1); color: #15152a; box-shadow: 0 -4px 24px rgba(0,0,0,0.12); }
        #ps-consent-inner { max-width: 1040px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
        #ps-consent-text { flex: 1; line-height: 1.5; }
        #ps-consent-btns { display: flex; gap: 10px; flex-shrink: 0; }
        #ps-btn-accept { background: #6c63ff; color: #fff; border: none; border-radius: 9px; padding: 9px 20px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px; cursor: pointer; }
        #ps-btn-accept:hover { background: #8b84ff; }
        #ps-btn-settings { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #9090b8; border-radius: 9px; padding: 9px 16px; font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px; cursor: pointer; }
        body.light #ps-btn-settings { border-color: rgba(0,0,0,0.2); color: #5a5a78; }
        #ps-btn-settings:hover { border-color: rgba(255,255,255,0.4); color: #f4f4fc; }
        body.light #ps-btn-settings:hover { color: #15152a; }
        #ps-consent-modal { position: fixed; inset: 0; z-index: 100000; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; padding: 20px; }
        #ps-consent-modal-box { background: #13131f; border: 1px solid rgba(255,255,255,0.14); border-radius: 18px; padding: 28px; max-width: 480px; width: 100%; font-family: 'DM Sans', sans-serif; }
        body.light #ps-consent-modal-box { background: #fff; border-color: rgba(0,0,0,0.12); }
        #ps-consent-modal-box h2 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 20px; margin-bottom: 12px; color: #f4f4fc; }
        body.light #ps-consent-modal-box h2 { color: #15152a; }
        #ps-consent-modal-box p { color: #9090b8; font-size: 14px; line-height: 1.6; margin-bottom: 18px; }
        body.light #ps-consent-modal-box p { color: #5a5a78; }
        .ps-toggle-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
        body.light .ps-toggle-row { border-bottom-color: rgba(0,0,0,0.08); }
        .ps-toggle-row:last-of-type { border-bottom: none; }
        .ps-toggle-info strong { font-size: 14px; display: block; margin-bottom: 3px; color: #f4f4fc; }
        body.light .ps-toggle-info strong { color: #15152a; }
        .ps-toggle-info span { font-size: 13px; color: #9090b8; line-height: 1.4; }
        .ps-modal-btns { display: flex; gap: 10px; margin-top: 20px; justify-content: flex-end; }
        .ps-btn-save { background: #6c63ff; color: #fff; border: none; border-radius: 9px; padding: 10px 22px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; cursor: pointer; }
        .ps-btn-cancel { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #9090b8; border-radius: 9px; padding: 10px 18px; font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 14px; cursor: pointer; }
        body.light .ps-btn-cancel { border-color: rgba(0,0,0,0.2); }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(banner);
  }

  // Accept all — currently same as necessary since we only use necessary cookies
  window.PSConsent.acceptAll = function () {
    setConsent('all');
    hideBanner();
    hideModal();
  };

  window.PSConsent.acceptNecessary = function () {
    setConsent('necessary');
    hideBanner();
    hideModal();
  };

  function hideBanner() {
    const b = document.getElementById('ps-consent-banner');
    if (b) b.remove();
  }

  function hideModal() {
    const m = document.getElementById('ps-consent-modal');
    if (m) m.remove();
  }

  // Detailed settings modal
  window.PSConsent.showDetails = function () {
    if (document.getElementById('ps-consent-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'ps-consent-modal';
    modal.innerHTML = `
      <div id="ps-consent-modal-box" role="dialog" aria-modal="true" aria-label="Cookie settings">
        <h2>Cookie settings</h2>
        <p>We only use cookies that are necessary to run the service. We don't use advertising or tracking cookies.</p>
        <div class="ps-toggle-row">
          <div class="ps-toggle-info">
            <strong>Strictly necessary</strong>
            <span>Authentication, session data, and your UI preferences. Required for the service to work.</span>
          </div>
          <span style="color:#43e97b;font-weight:600;font-size:13px;flex-shrink:0;margin-top:2px;">Always on</span>
        </div>
        <div class="ps-toggle-row">
          <div class="ps-toggle-info">
            <strong>Analytics</strong>
            <span>We currently do not use analytics cookies. We'll ask for your consent if this changes.</span>
          </div>
          <span style="color:#9090b8;font-size:13px;flex-shrink:0;margin-top:2px;">Not used</span>
        </div>
        <div class="ps-toggle-row">
          <div class="ps-toggle-info">
            <strong>Marketing</strong>
            <span>We do not use marketing or advertising cookies.</span>
          </div>
          <span style="color:#9090b8;font-size:13px;flex-shrink:0;margin-top:2px;">Not used</span>
        </div>
        <div class="ps-modal-btns">
          <button class="ps-btn-cancel" onclick="document.getElementById('ps-consent-modal').remove()">Cancel</button>
          <button class="ps-btn-save" onclick="window.PSConsent.acceptAll()">Save & accept</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
  };

  // Wire the "Cookie settings" footer link
  function wireFooterLink() {
    document.querySelectorAll('a[href="/cookies"], a[href="#cookie-settings"]').forEach(function (link) {
      if (link.textContent.includes('settings') || link.href.includes('settings')) return;
    });
    // Add a "Cookie settings" clickable item to every footer
    document.querySelectorAll('footer').forEach(function (footer) {
      if (footer.querySelector('.ps-cookie-settings-link')) return;
      const a = document.createElement('a');
      a.href = '#';
      a.className = 'ps-cookie-settings-link';
      a.textContent = 'Cookie settings';
      a.style.cssText = 'cursor:pointer;margin-left:8px;';
      a.addEventListener('click', function (e) { e.preventDefault(); window.PSConsent.showDetails(); });
      const lastChild = footer.firstElementChild;
      if (lastChild) { lastChild.appendChild(document.createTextNode(' · ')); lastChild.appendChild(a); }
    });
  }

  // Init
  function init() {
    wireFooterLink();
    const consent = getConsent();
    if (!consent) {
      // Small delay so the page paints first
      setTimeout(showBanner, 600);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
