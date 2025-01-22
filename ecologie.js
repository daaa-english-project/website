// JavaScript for interactive features (if needed)

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and ready.');

    // Example of a feature: highlighting sections on hover
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#e0f7ff';
        });

        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = '#fff';
        });
    });
});
