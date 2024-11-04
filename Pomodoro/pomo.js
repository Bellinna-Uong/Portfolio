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

document.getElementById("image-switch").addEventListener("change", function() {
    var img = document.getElementById("switchable-image");

    // Commencez par réduire l'opacité pour cacher l'image
    img.style.opacity = 0;

    // Attendez que la transition soit terminée avant de changer l'image
    setTimeout(function() {
        if (document.getElementById("image-switch").checked) {
            img.src = "../projet/pomonight.png"; // Lien vers la nouvelle image
        } else {
            img.src = "../projet/pomoday.png"; // Lien vers l'image originale
        }

        // Réappliquez l'opacité une fois l'image changée
        img.style.opacity = 1;
    }, 500); // La durée correspondante à la transition définie en CSS
});

// CHANGEMENT LANGUE

function changeLanguage(lang) {
    if (lang === 'fr') {
        document.getElementById('intro1').textContent = "Study with Pomodoro est une application web conçue pour améliorer votre productivité en combinant la technique Pomodoro avec une gestion efficace des tâches.";
        document.getElementById('intro2').textContent = "L'application propose un minuteur Pomodoro réglé sur une session de travail de 40 minutes suivie d'une pause de 5 minutes, ce qui vous aide à maximiser votre concentration tout en prévoyant des périodes de repos régulières. L'application comprend également une liste de tâches intégrée qui vous aide à organiser et à suivre vos tâches.";
        document.getElementById('carte1').textContent = "Survolez moi";
        document.getElementById('carte4').textContent = "Survolez moi";
        document.getElementById('carte5').textContent = "Survolez moi";
        document.getElementById('carte2').textContent = "SKILL UTILISE";
        document.getElementById('carte3').textContent = "SKILL UTILISE";
        document.getElementById('carte6').textContent = "SKILL UTILISE";
        document.getElementById('objectif').textContent = "Objectif : Améliorer mes compétences dans le cadre d'un projet personnel";
        document.getElementById('explication1').textContent = "Le site web est conçu pour améliorer la productivité en combinant une liste de tâches et un minuteur Pomodoro.";
        document.getElementById('explication2').textContent = "La liste des tâches permet aux utilisateurs d'ajouter autant de tâches qu'ils le souhaitent, avec la possibilité de filtrer les tâches en fonction de leur statut - si elles sont terminées, en cours ou en attente. Il est ainsi facile de gérer efficacement les tâches. En complément, les utilisateurs peuvent supprimer des tâches individuellement ou effacer toute la liste en une seule fois, ce qui leur offre une certaine souplesse dans la gestion de leur charge de travail.";
        document.getElementById('explication3').textContent = "Le minuteur Pomodoro est réglé sur 40 minutes de travail concentré suivies d'une pause de 5 minutes. Il se met automatiquement à jour, ce qui aide les utilisateurs à maintenir un rythme productif. Le minuteur propose également des commandes permettant de mettre en pause, de redémarrer ou de réinitialiser le compte à rebours, ce qui permet aux utilisateurs d'ajuster le minuteur en fonction de leurs besoins.";
        document.getElementById('explication4').textContent = "La conception du site fait en sorte que la liste des tâches et le minuteur Pomodoro s'affichent côte à côte, créant ainsi une expérience utilisateur cohérente et intuitive.";
        document.getElementById('difficulty').textContent = "Mes difficultés";
        document.getElementById('difficulte').textContent = "Ce projet m'a posé plusieurs nouveaux défis. C'était la première fois que je devais créer un compte à rebours qui changeait automatiquement d'état en fonction de l'heure, indiquant si l'utilisateur travaillait ou se reposait. En outre, j'ai dû gérer plusieurs sections au sein de l'interface, en les juxtaposant pour créer une présentation cohérente et fonctionnelle. Équilibrer ces éléments et s'assurer qu'ils fonctionnent bien ensemble a été une partie essentielle du processus de développement.";
    } else if (lang === 'en') {
        document.getElementById('intro1').textContent = "Study with Pomodoro is a web application designed to enhance your productivity by combining the Pomodoro technique with effective task  management.";
        document.getElementById('intro2').textContent = "The app features a Pomodoro timer set to a 40-minute work session followed by a 5-minute break, helping you maximize focus while allowing for regular rest periods. A key feature of the application is an integrated to-do list that helps you organize and track your tasks.";
        document.getElementById('carte1').textContent = "Hover me";
        document.getElementById('carte4').textContent = "Hover me";
        document.getElementById('carte5').textContent = "Hover me";
        document.getElementById('carte2').textContent = "SKILL USED";
        document.getElementById('carte3').textContent = "SKILL USED";
        document.getElementById('carte6').textContent = "SKILL USED";
        document.getElementById('objectif').textContent = "Objective : Improving my skills as a Personal Project";
        document.getElementById('explication1').textContent = "The website is designed to enhance productivity by combining a to-do list and a Pomodoro timer.";
        document.getElementById('explication2').textContent = "The to-do list allows users to add as many tasks as they wish, with the ability to filter tasks based on their status—whether they are completed, in progress, or pending. This makes it easy to manage tasks efficiently. Additionally, users can delete tasks individually or clear the entire list at once, providing flexibility in how they manage their workload.";
        document.getElementById('explication3').textContent = "The Pomodoro timer is set to 40 minutes of focused work followed by a 5-minute break. It automatically updates,helping users maintain a productive rhythm. The timer also offers controls to pause, restart, or reset the countdown, giving users the ability to adjust the timer according to their needs.";
        document.getElementById('explication4').textContent = "The design of the site ensures that the to-do list and Pomodoro timer are displayed side by side, creating a cohesive and intuitive user experience.";
        document.getElementById('difficulty').textContent = "Difficulty";
        document.getElementById('difficulte').textContent = "This project presented several new challenges for me. It was the first time I had to create a countdown timer that would automatically change its status based on the time—indicating whether the user was working or resting. Additionally, I had to manage multiple sections within the interface, arranging them side by side to create a cohesive and functional layout. Balancing these elements and ensuring they worked together smoothly was a key part of the development process.";
    }
}
