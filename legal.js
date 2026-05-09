(function () {
    const localeIds = ['pl', 'en', 'de', 'es', 'ru', 'fr'];

    function getLocaleFromHash() {
        const hash = window.location.hash.replace('#', '').trim().toLowerCase();
        return localeIds.includes(hash) ? hash : null;
    }

    function getPreferredLocale() {
        const browserLanguage = (navigator.language || 'en').toLowerCase();
        const shortCode = browserLanguage.split(/[-_]/)[0];
        return localeIds.includes(shortCode) ? shortCode : 'en';
    }

    function highlight(locale) {
        document.querySelectorAll('.locale-section').forEach((section) => {
            section.classList.toggle('is-target', section.id === locale);
        });

        document.querySelectorAll('[data-locale-link]').forEach((link) => {
            const isActive = link.getAttribute('data-locale-link') === locale;
            link.classList.toggle('active', isActive);
        });
    }

    function activate(locale, updateHash) {
        if (!localeIds.includes(locale)) {
            return;
        }

        highlight(locale);
        document.documentElement.lang = locale;

        if (updateHash && window.location.hash !== `#${locale}`) {
            history.replaceState(null, '', `#${locale}`);
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        const locale = getLocaleFromHash() || getPreferredLocale();
        activate(locale, true);
    });

    window.addEventListener('hashchange', () => {
        const locale = getLocaleFromHash() || getPreferredLocale();
        activate(locale, false);
    });
})();
