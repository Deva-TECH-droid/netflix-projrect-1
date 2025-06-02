// JavaScript to animate the skill bars
document.addEventListener("DOMContentLoaded", function() {
    const skillFills = document.querySelectorAll('.skill-fill');

    skillFills.forEach(skillFill => {
        const skillValue = skillFill.getAttribute('data-skill');
        skillFill.style.width = skillValue + '%'; // Set the width based on data-skill attribute
    });
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("About section loaded");
});
// JavaScript to handle the "View More Projects" button
// document.addEventListener("DOMContentLoaded", function() {
//     const viewMoreBtn = document.getElementById('viewMoreBtn');
//     const hiddenProjects = document.querySelectorAll('.project-card.hidden');

//     viewMoreBtn.addEventListener('click', function() {
//         hiddenProjects.forEach(project => {
//             project.classList.remove('hidden'); // Show hidden projects
//         });
//         viewMoreBtn.style.display = 'none'; // Hide the "View More" button after clicking
//     });
// });
// JavaScript to handle the "View More Projects" button and add animation
document.addEventListener("DOMContentLoaded", function() {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const hiddenProjects = document.querySelectorAll('.project-card.hidden');

    viewMoreBtn.addEventListener('click', function() {
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.remove('hidden'); // Show hidden projects
                project.classList.add('fade-in'); // Add fade-in class for animation
            }, index * 100); // Stagger the animation for each project
        });
        viewMoreBtn.style.display = 'none'; // Hide the "View More" button after clicking
    });
});
// JavaScript for any interactive elements (if needed)
document.addEventListener("DOMContentLoaded", function() {
    console.log("About section loaded");
});
// JavaScript to handle the "View More Blogs" button and add animation
document.addEventListener("DOMContentLoaded", function() {
    const viewMoreBlogBtn = document.getElementById('viewMoreBlogBtn');
    const hiddenBlogCards = document.querySelectorAll('.blog-card.hidden');

    viewMoreBlogBtn.addEventListener('click', function() {
        hiddenBlogCards.forEach((blogCard, index) => {
            setTimeout(() => {
                blogCard.classList.remove('hidden'); // Show hidden blog cards
                blogCard.classList.add('fade-in'); // Add fade-in class for animation
            }, index * 100); // Stagger the animation for each blog card
        });
        viewMoreBlogBtn.style.display = 'none'; // Hide the "View More" button after clicking
    });
});