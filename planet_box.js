// JavaScript to handle showing/hiding the content box of each planet/Sun


/*crete function named toggleTextBox to toggle the display of text
  It takes a planetId parameter to identify which planet's text box to toggle.
  We are going to retrieve in our html the element with the id that consists of 'text-box-' and then the parameter value of its function.
  Then we check the state of this element. 
  If the display is 'block', it changes it to 'none', otherwise, it changes it to 'block'.
*/



// Function to toggle the display of the text box
function toggleTextBox(planetId) {
    let textBox = document.getElementById('text-box-' + planetId);
    textBox.classList.toggle('show-box');
    if (textBox.style.display === 'block') {
        textBox.style.display = 'none';
    } else {
        textBox.style.display = 'block';
    }
}


/* 
   Function to add event listeners for each planet and its associated close button.
   Note that the function is called addEventListeners with "s" at the end
   It takes a planetId parameter to identify which planet's event listeners to add.
   It adds a click EventListener to the planet element to display the text box.
   It also adds a click event listener to the close button of the text box to toggle its display.
*/


function addEventListeners(planetId) {
    document.getElementById('text-' + planetId).addEventListener('click', function() {
        toggleTextBox(planetId);
    });

    document.getElementById('close-btn-' + planetId).addEventListener('click', function() {
        toggleTextBox(planetId);
    });
}

// We now run our funtion addEventListeners one time for each planet name. 
// One planet name = run funtion once

addEventListeners('sun');
addEventListeners('mercury');
addEventListeners('venus');
addEventListeners('earth');
addEventListeners('mars');
addEventListeners('jupiter');
addEventListeners('saturn');
addEventListeners('uranus');
addEventListeners('neptune');



