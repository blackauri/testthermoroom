// This file initializes the fullPage.js library and sets up the bullet navigation.

new fullpage('#fullpage', {
    // Navigation
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3', 'section4'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Section 1', 'Section 2', 'Section 3', 'Section 4'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    // Scrolling
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,

    // Events
    afterLoad: function(origin, destination, direction){
        console.log("Loaded section: " + destination.anchor);
    }
});