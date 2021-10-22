// Hamburger menu: mostrare / nascondere il menu principale

// creo le variabili selezionando gli elementi css di cui ho bisogno
const hamMenuIcon = document.querySelector(".header-right > a");
const hamMenu = document.querySelector(".hamburger-menu");
const hamMenuClose = document.querySelector(".close");

// aggiungo funzione di click su icona hamburger menu
hamMenuIcon.addEventListener('click',

    // aggiungo la classe active al div dell hamburger menu per farlo visualizzare
    function () {
        hamMenu.className = hamMenu.classList + " active";
    }

);

// aggiungo funzione di click su icona close all'interno dell hamburger menu
hamMenuClose.addEventListener('click',

    // rimuova la classe active dal div dell hamburger menu per nasconderlo
    function () {
        hamMenu.classList.remove('active');
    }

);