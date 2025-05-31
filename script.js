/*** Dark Mode ***
  Purpose:
  - Use this starter code to add a dark mode feature to your website.
***/


// Step 1: Select the theme button
letthemeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

    // This section will run whenever the button is clicked
}


// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);




/*** Form Handling [PLACEHOLDER] ***/
/*** Form Validation [PLACEHOLDER] ***/
/*** Animations [PLACEHOLDER] ***/
/*** Success Modal [PLACEHOLDER] ***/

/*** Scroll Animations ***
  Purpose:
  - Use this starter code to add scroll animations to your website.
***/


// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll('.revealable');


// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
      



        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;;
        let revealDistance = parseInt(getComputedStyle(revealableContainers[i]).getPropertyValue('--reveal-distance'), 10);



        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            revealableContainers[i].classList.add('active');
        }
        // If the container is not within range, hide it by removing the 'active' class
        else {
            revealableContainers[i].classList.remove('active');
        }
    }
}


// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
