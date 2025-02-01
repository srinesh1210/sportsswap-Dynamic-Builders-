
JAVA SCRIPT
document.addEventListener('DOMContentLoaded', function() {
    // Set the font size of the first <h1> element
    document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

    // Add click event listener to the "Explore Now" button
    const exploreButton = document.querySelector('.cta-button[href="#category-item"]');
    exploreButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#category-item').scrollIntoView({
            behavior: 'smooth'
        });
    });
});