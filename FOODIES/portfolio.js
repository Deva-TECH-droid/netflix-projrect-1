document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class when the element is in view
                entry.target.classList.add('visible');
                // Stop observing the element after it has been animated
                observer.unobserve(entry.target);
            }
        });
    });

    // Observe each fade-in element
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle');

    // Function to animate skill rings
    function animateSkills() {
        circles.forEach(circle => {
            const percentage = circle.getAttribute('data-skill');
            circle.style.setProperty('--percentage', percentage + '%');
            circle.style.animation = 'fill 1s forwards'; // Trigger the animation
        });
    }

    // Check if the skills section is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Scroll event listener to trigger animations
    window.addEventListener('scroll', () => {
        const skillsSection = document.querySelector('#skills');
        if (isInViewport(skillsSection)) {
            animateSkills(); // Animate skills when the section is in view
            window.removeEventListener('scroll', arguments.callee); // Remove event listener after animation
        }
    });

    // Initial animation on page load
    animateSkills();
});