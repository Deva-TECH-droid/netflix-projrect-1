
    document.addEventListener("DOMContentLoaded", function() {
        const foodItems = document.querySelectorAll('.food-item');

        const observerOptions = {
            root: null, // Use the viewport as the root
            threshold: 0.1 // Trigger when 10% of the item is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once it becomes visible
                }
            });
        }, observerOptions);

        foodItems.forEach(item => {
            observer.observe(item); // Start observing each food item
        });
    });
