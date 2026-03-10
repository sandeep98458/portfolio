export function scrollToSection(sectionId, e) {
    if (e) e.preventDefault();

    if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Update URL without #
    const path = sectionId === 'home' ? '/' : `/${sectionId}`;
    window.history.pushState(null, '', path);
}
