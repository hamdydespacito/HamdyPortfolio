// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');
const icon = themeSwitch.querySelector('i');

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Theme toggle functionality with smooth transition
themeSwitch.addEventListener('click', () => {
    document.body.style.transition = 'background-color 0.3s, color 0.3s';
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections and other animated elements
document.querySelectorAll('section, .skill, .work-card, .form-group, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Contact Form with animation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animate submit button
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitBtn.style.transform = 'scale(1)';
        }, 100);

        // Show success message with animation
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Message sent successfully!';
        successMessage.style.color = 'var(--secondary-color)';
        successMessage.style.textAlign = 'center';
        successMessage.style.marginTop = '1rem';
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(10px)';
        successMessage.style.transition = 'all 0.3s ease';

        contactForm.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.style.opacity = '1';
            successMessage.style.transform = 'translateY(0)';
        }, 10);

        setTimeout(() => {
            contactForm.reset();
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translateY(-10px)';
            setTimeout(() => successMessage.remove(), 300);
        }, 3000);
    });
}

// Download Button Animation
const downloadButtons = document.querySelectorAll('.download-btn');
downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

// Hover effect for work cards
document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add parallax effect to profile image
const profileImg = document.querySelector('.profile img');
if (profileImg) {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const moveX = (clientX - innerWidth / 2) / 50;
        const moveY = (clientY - innerHeight / 2) / 50;
        
        profileImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}