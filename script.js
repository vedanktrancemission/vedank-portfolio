// ============================================
// Portfolio Website - Interactive Features
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initThemeToggle();
    initNavigation();
    initScrollAnimations();
    initCounterAnimations();
    initTypewriterEffect();
    initParallaxEffects();

    initSmoothScroll();
    initIntersectionObserver();
    initMicroInteractions();
});

// ============================================
// Theme Toggle
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    // Check if theme toggle button exists
    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }

    console.log('Theme toggle button found:', themeToggle);

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);

    console.log('Initial theme set to:', savedTheme);
    console.log('Root element data-theme attribute:', root.getAttribute('data-theme'));

    // Log computed background color for debugging
    setTimeout(() => {
        const computedStyle = window.getComputedStyle(document.body);
        console.log('Computed background color:', computedStyle.backgroundColor);

        // Also log the CSS variable value
        const rootStyle = window.getComputedStyle(root);
        console.log('CSS variable --bg-primary:', rootStyle.getPropertyValue('--bg-primary'));
    }, 100);

    // Update toggle button state
    updateThemeToggleIcon(savedTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        console.log('Theme toggle clicked. Current theme:', currentTheme, 'New theme:', newTheme);

        // Apply new theme
        root.setAttribute('data-theme', newTheme);

        console.log('Root element data-theme attribute after toggle:', root.getAttribute('data-theme'));

        // Log computed background color after toggle for debugging
        setTimeout(() => {
            const computedStyle = window.getComputedStyle(document.body);
            console.log('Computed background color after toggle:', computedStyle.backgroundColor);

            // Also log the CSS variable value
            const rootStyle = window.getComputedStyle(root);
            console.log('CSS variable --bg-primary after toggle:', rootStyle.getPropertyValue('--bg-primary'));
        }, 100);

        // Save preference to localStorage
        localStorage.setItem('theme', newTheme);

        // Update toggle button icon
        updateThemeToggleIcon(newTheme);

        // Add transition class for smooth theme change
        document.body.classList.add('theme-transitioning');

        // Remove transition class after animation completes
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
    });

    // Listen for system theme changes
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeQuery.addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                const systemTheme = e.matches ? 'dark' : 'light';
                root.setAttribute('data-theme', systemTheme);
                updateThemeToggleIcon(systemTheme);
            }
        });
    }

    // Log current theme for debugging
    console.log('Current theme:', root.getAttribute('data-theme'));

    // Initialize cursor trail effect
    initCursorTrail();
}

// ============================================
// Update Theme Toggle Icon
// ============================================
function updateThemeToggleIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) {
        console.error('Theme toggle button not found in updateThemeToggleIcon');
        return;
    }

    console.log('Updating theme toggle icon to:', theme);

    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');

    if (theme === 'light') {
        // Show moon icon in light mode
        sunIcon.style.opacity = '0';
        sunIcon.style.transform = 'rotate(0deg) scale(0.5)';
        moonIcon.style.opacity = '1';
        moonIcon.style.transform = 'rotate(0deg) scale(1)';
    } else {
        // Show sun icon in dark mode
        sunIcon.style.opacity = '1';
        sunIcon.style.transform = 'rotate(360deg) scale(1)';
        moonIcon.style.opacity = '0';
        moonIcon.style.transform = 'rotate(-90deg) scale(0.5)';
    }
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.title-line, .title-name, .title-role, .hero-description, ' +
        '.hero-certifications, .hero-cta, .hero-stats, .hero-visual, ' +
        '.section-header, .bento-card, .project-card, .timeline-item, ' +
        '.contact-card'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS class for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Counter Animations
// ============================================
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// Typewriter Effect
// ============================================
function initTypewriterEffect() {
    const roles = ['Full Stack Developer', 'Cloud Architect', 'Microservices Expert', 'AI Enthusiast'];
    const roleElement = document.querySelector('.title-role');

    if (!roleElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing after initial animation
    setTimeout(type, 1500);
}

// ============================================
// Parallax Effects
// ============================================
function initParallaxEffects() {
    const orbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Parallax scroll effect
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}



// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Intersection Observer for Animations
// ============================================
function initIntersectionObserver() {
    // Staggered animation for cards
    const cardGroups = document.querySelectorAll('.bento-grid, .projects-grid');

    cardGroups.forEach(group => {
        const cards = group.querySelectorAll(':scope > *');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(group);
    });
}

// ============================================
// Micro-interactions
// ============================================
function initMicroInteractions() {
    // Button ripple effect
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                width: 100px;
                height: 100px;
                left: ${x - 50}px;
                top: ${y - 50}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
            `;

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Card tilt effect
    document.querySelectorAll('.bento-card, .project-card, .contact-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Skill tag hover effect
    document.querySelectorAll('.skill-tag, .tech-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) translateY(-2px)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Timeline marker animation
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            const marker = this.querySelector('.marker-dot');
            marker.style.transform = 'scale(1.2)';
            marker.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
        });

        item.addEventListener('mouseleave', function () {
            const marker = this.querySelector('.marker-dot');
            marker.style.transform = 'scale(1)';
            marker.style.boxShadow = 'none';
        });
    });

    // Magnetic effect for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// Cursor Trail Initialization
// ============================================
// initCursorTrail is called at the end of the main initThemeToggle function

// ============================================
// Cursor Trail Effect
// ============================================
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;

    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: ${8 - i * 0.5}px;
            height: ${8 - i * 0.5}px;
            background: rgba(37, 211, 102, ${0.5 - i * 0.05});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }

    let mouseX = 0;
    let mouseY = 0;
    let trailX = [];
    let trailY = [];

    for (let i = 0; i < trailLength; i++) {
        trailX.push(mouseX);
        trailY.push(mouseY);
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        trailX[0] = mouseX;
        trailY[0] = mouseY;

        for (let i = 1; i < trailLength; i++) {
            trailX[i] += (trailX[i - 1] - trailX[i]) * 0.3;
            trailY[i] += (trailY[i - 1] - trailY[i]) * 0.3;

            trail[i].style.left = trailX[i] - (4 - i * 0.25) + 'px';
            trail[i].style.top = trailY[i] - (4 - i * 0.25) + 'px';
        }

        requestAnimationFrame(animateTrail);
    }

    animateTrail();

    // Hide trail on mobile
    if (window.innerWidth < 768) {
        trail.forEach(dot => dot.style.display = 'none');
    }
}


// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations can be added here
}, 100));


// ============================================
// Console Easter Egg
// ============================================
console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #a1a1aa;');
console.log('%cBuilt with ❤️ using modern web technologies', 'font-size: 12px; color: #71717a;');

// ============================================
// Service Worker Registration (Optional)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// ============================================
// Export functions for testing (if needed)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initThemeToggle,
        initNavigation,
        initScrollAnimations,
        initCounterAnimations,
        initTypewriterEffect,
        initParallaxEffects,
        initSmoothScroll,
        initIntersectionObserver,
        initMicroInteractions
    };
}
