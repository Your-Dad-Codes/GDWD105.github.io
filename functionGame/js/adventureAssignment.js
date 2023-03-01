/*
    ASSIGNMENT PROMPT
    Below are several empty function bodies; any code put inside of them
    will run when their corresponding buttons/keys are clicked or pressed.

    You have access to the following functions from adventureLibrary.js:
        moveLeft, moveRight, moveUp, moveDown,
        jumpLeft, jumpRight, jumpUp, jumpDown,
        attack, jump, nudge

    Plug in the functions above and execute them in the empty function
    bodies below; if you execute the correct functions in here, the
    game should become playable, and your player character can move around!
*/

// This function will run when the user clicks the "Move Left" button,
// or presses the 'a' or left arrow key
function pressMoveLeftButton(distance=1) {
    moveLeft();
    nudge(); 
    // TODO: execute the correct function from adventureLibrary.js below!
}

// This function will run when the user clicks the "Move Right" button,
// or presses the 'd' or right arrow key
function pressMoveRightButton(distance=1) {
    moveRight();
    nudge();
    // TODO: execute the correct function from adventureLibrary.js below!

}

// This function will run when the user clicks the "Move Down" button,
// or presses the 's' or down arrow key
function pressMoveDownButton(distancee=1) {
    moveDown();
    nudge();
    // TODO: execute the correct function from adventureLibrary.js below!

}

// This function will run when the user clicks the "Move Up" button,
// or presses the 'w' or up arrow key
function pressMoveUpButton(distance=1) {
    moveUp()
    nudge();
    // TODO: execute the correct function from adventureLibrary.js below!

}

// This function will run when the user clicks the "Attack!" button,
// or presses the spacebar on the keyboard
function pressAttackButton() {
    attack();
    attackBlock();

    // TODO: execute the correct function from adventureLibrary.js below!

}

// This function will run when the user clicks the "Jump Up" button,
// or presses SHIFT and the 'w' key
function pressJumpUpButton(distance=3) {
    jumpUp();
    // TODO: execute the correct function from adventureLibrary.js below!

}

// This function will run when the user clicks the "Jump Down" button,
// or presses SHIFT and the 's' key
function pressJumpDownButton(distance=3) {
    jumpDown();
    // TODO: execute the correct function from adventureLibrary.js below!

}

// This function will run when the user clicks the "Jump Left" button,
// or presses SHIFT and the 'a' key
function pressJumpLeftButton(distance=3) {
    jumpLeft();
    // TODO: execute the correct function from adventureLibrary.js below!

}

// This function will run when the user clicks the "Jump Right" button,
// or presses SHIFT and the 'd' key
function pressJumpRightButton(distance=3) {
    jumpRight();
    // TODO: execute the correct function from adventureLibrary.js below!

}

// This function will run when the user clicks the "Jump!" button
function pressJumpButton() {
    pressJumpButton();
    // TODO: execute the correct function from adventureLibrary.js below!

}