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