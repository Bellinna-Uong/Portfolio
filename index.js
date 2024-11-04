// CHANGEMENT DE THEME
const themeToggler = document.querySelector(".theme-switch__checkbox");

themeToggler.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme-variables');
});


// SECTION POUR PROJETS

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

showSection('section1');
