/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


	// Détection le mode de l'ordinateur (mode sombre ou clair)
	const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)');

	// Définission de la variable CSS en fonction du mode détecté
	if (prefersLightMode.matches) {
	  document.documentElement.style.setProperty('--mode-light', 'white');
	  document.documentElement.style.setProperty('--mode-dark', '#292929');
	} else {
	  document.documentElement.style.setProperty('--mode-light', '#292929');
	  document.documentElement.style.setProperty('--mode-dark', 'black'); 
	}

});
