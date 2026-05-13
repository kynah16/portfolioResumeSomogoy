// Initialize Lucide Icons
lucide.createIcons();

// Scroll reveal Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Attach observer to all elements with the .reveal class
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile menu toggle logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu automatically when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Logic for custom Hero Config (Simplified from original SDK)
const defaultConfig = {
    hero_title: 'Shekynah Mae\nSerillo Somogoy',
    hero_subtitle: 'Aspiring Computer Engineer focused on exploring technology and shaping future innovations.'
};

function applyInitialConfig() {
    const title = document.getElementById('hero-title');
    const subtitle = document.getElementById('hero-subtitle');
    
    if (title) title.innerHTML = defaultConfig.hero_title.replace(/\n/g, '<br>');
    if (subtitle) subtitle.textContent = defaultConfig.hero_subtitle;
}

// Run on load
applyInitialConfig();
