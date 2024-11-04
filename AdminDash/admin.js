//MODAL
// Récupérer les éléments
var modal = document.getElementById("imageModal");
var mainImage = document.getElementById("mainImage");
var modalImage = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];

// Quand l'utilisateur clique sur l'image, ouvrir le modal et afficher l'image
mainImage.onclick = function() {
    modal.style.display = "block"; // Utilise la même image ou vous pouvez changer la source ici
}

// Quand l'utilisateur clique sur le bouton "fermer" (span), fermer le modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quand l'utilisateur clique en dehors de l'image dans le modal, fermer le modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





// SWITCH
document.getElementById("image-switch").addEventListener("change", function() {
    var img = document.getElementById("switchable-image");

    // Commencez par réduire l'opacité pour cacher l'image
    img.style.opacity = 0;

    // Attendez que la transition soit terminée avant de changer l'image
    setTimeout(function() {
        if (document.getElementById("image-switch").checked) {
            img.src = "../projet/admin-night.png"; // Lien vers la nouvelle image
        } else {
            img.src = "../projet/Ad.png"; // Lien vers l'image originale
        }

        // Réappliquez l'opacité une fois l'image changée
        img.style.opacity = 1;
    }, 500); // La durée correspondante à la transition définie en CSS
});

// CHANGEMENT LANGUE

function changeLanguage(lang) {
    if (lang === 'fr') {
        document.getElementById('intro').textContent = "Ce projet présente un tableau de bord administratif réactif conçu pour répondre aux besoins administratifs d'une entreprise moderne. Ce tableau de bord a été conçu en tenant compte de la flexibilité et de la convivialité, offrant une navigation transparente et une interface conviviale sur n'importe quel appareil. Découvrez les caractéristiques et les éléments de conception qui distinguent ce projet !";
        document.getElementById('carte1').textContent = "Survolez moi";
        document.getElementById('carte4').textContent = "Survolez moi";
        document.getElementById('carte5').textContent = "Survolez moi";
        document.getElementById('carte2').textContent = "SKILL UTILISE";
        document.getElementById('carte3').textContent = "SKILL UTILISE";
        document.getElementById('carte6').textContent = "SKILL UTILISE";
        document.getElementById('objectif').textContent = "Objectif : Améliorer mes compétences dans le cadre d'un projet personnel";
        document.getElementById('explication1').textContent = "Ce projet personnel a été conçu pour approfondir ma compréhension des langages HTML, CSS et JavaScript. L'objectif était de créer une application web fonctionnelle et interactive qui démontre ma capacité à intégrer ces technologies de manière efficace.";
        document.getElementById('explication_2').textContent = "Le site comporte un menu de navigation qui permet aux utilisateurs d'explorer différentes sections. Les utilisateurs peuvent changer la date pour retrouver les informations d'un jour spécifique. Les données clés sont présentées sous forme de graphiques et les dernières nouvelles sont affichées. Il y a également une section pour les commandes récentes, avec des informations détaillées. Le site comprend également une section consacrée à l'analyse des ventes.";
        document.getElementById('difficulty').textContent = "Mes difficultés";
        document.getElementById('difficulte').textContent = "L'un des principaux défis consistait à créer une base de code JavaScript distincte capable de stocker les informations relatives aux commandes et de mettre automatiquement à jour le statut, les couleurs correspondantes, etc. Il s'agit essentiellement d'une forme de système de gestion des données.";
        document.getElementById('media').textContent = "Un Dashboard réactif";
        document.getElementById('responsive').textContent = "Le site web est entièrement réactif, ce qui signifie qu'il ajuste automatiquement sa mise en page et sa conception pour s'adapter à différentes tailles d'écran. Que vous le consultiez sur un smartphone, une tablette ou un ordinateur de bureau, le site s'adapte de manière transparente pour offrir une expérience optimale à l'utilisateur, quel que soit l'appareil utilisé.";

    } else if (lang === 'en') {
        document.getElementById('intro').textContent = "This project showcases a Responsive Admin Dashboard designed to meet the administrative needs of a modern business. This dashboard is built with flexibility and usability in mind, offering seamless navigation and a user-friendly interface on any device. Explore the features and design elements that make this project stand out !";
        document.getElementById('carte1').textContent = "Hover me";
        document.getElementById('carte4').textContent = "Hover me";
        document.getElementById('carte5').textContent = "Hover me";
        document.getElementById('carte2').textContent = "SKILL USED";
        document.getElementById('carte3').textContent = "SKILL USED";
        document.getElementById('carte6').textContent = "SKILL USED";
        document.getElementById('objectif').textContent = "Objective : Improving my skills as a Personal Project";
        document.getElementById('explication1').textContent = "This personal project was designed to deepen my understanding of HTML, CSS, and JavaScript. The goal was to create a functional, interactive web application that showcases my ability to integrate these technologies effectively.";
        document.getElementById('explication_2').textContent = "The site features a navigation menu that allows users to explore different sections. Users can change the date to retrieve information from a specific day. Key data is presented with charts, and the latest news is displayed. There's also a section for recent orders, showing detailed information. Additionally, the site includes a Sales Analytics section.";
        document.getElementById('difficulty').textContent = "Difficulty";
        document.getElementById('difficulte').textContent = "One of the key challenges was creating a separate JavaScript codebase that could store order information and automatically update the status, corresponding colors, and more.The goal was to create a system where order data could be stored and processed independently of the main codebase. Essentially, it's a form of data management system.";
        document.getElementById('media').textContent = "A responsive Dashboard";
        document.getElementById('responsive').textContent = "The website is fully responsive, meaning it automatically adjusts its layout and design to fit different screen sizes. Whether you're viewing it on a smartphone, tablet, or desktop computer, the site adapts seamlessly to provide an optimal user experience on any device.";

    }
}
