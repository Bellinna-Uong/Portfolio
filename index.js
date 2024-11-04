// CHANGEMENT DE THEME
const themeToggler = document.querySelector(".theme-switch__checkbox");

themeToggler.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme-variables');
});

