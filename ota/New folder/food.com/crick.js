document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar active state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Live score update simulation
function updateScore() {
    const scores = document.querySelectorAll('.team-score');
    scores.forEach(score => {
        const currentScore = score.textContent;
        const [runs, wickets, overs] = currentScore.match(/(\d+)\/(\d+)\s*\((\d+\.\d+)\)/).slice(1);
        
        // Randomly update runs
        if (Math.random() > 0.7) {
            const newRuns = parseInt(runs) + Math.floor(Math.random() * 6) + 1;
            const newOvers = (parseFloat(overs) + 0.1).toFixed(1);
            score.textContent = `${newRuns}/${wickets} (${newOvers})`;
        }
    });
}

// Update score every 30 seconds
setInterval(updateScore, 30000);

// Add animation to cards on scroll
const cards = document.querySelectorAll('.match-card, .highlight-card, .news-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// Mobile menu toggle
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.navbar').appendChild(mobileMenu);

mobileMenu.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Add dynamic match updates
function addMatchUpdate() {
    const updates = [
        'FOUR! Brilliant shot through the covers!',
        'WICKET! Big breakthrough for the bowling team!',
        'SIX! Thats gone all the way!',
        'Close call! Nearly a run-out chance!',
        'Strategic timeout called by the batting team'
    ];

    const matchInfo = document.querySelector('.match-info');
    const update = updates[Math.floor(Math.random() * updates.length)];
    
    const updateElement = document.createElement('div');
    updateElement.className = 'match-update';
    updateElement.textContent = update;
    
    matchInfo.appendChild(updateElement);
    setTimeout(() => updateElement.remove(), 5000);
}

// Show match updates every 45 seconds
setInterval(addMatchUpdate, 45000);

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Add smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    revealObserver.observe(section);
});