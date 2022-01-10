'use strict';
//compatibilité navigateurs
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

const zombieDiv = document.getElementById("zombietomb");
zombieDiv.style.position = "relative";
zombieDiv.style.backgroundImage = "url('./img/zombie.png')";
let start = null;
let zombiePosX = 0;
let zombiePosY = 0;
const moveSpeed = 10;
let lastTime;

// /* Principal */
// function step (timestamp) {
//     //calculate refresh time (timestamp - progress)
//     let progress;
//     if (start === null) start = timestamp;
//     progress = timestamp - start;
//     console.log(progress);
//     //action for each frame
//     //progress/n = animation speed
//     zombieDiv.style.backgroundPositionX = -Math.min(100*Math.ceil(progress/150), 1000) + "px";
//     if (progress < 2000){
//         requestAnimationFrame(step);
//     } else {
//         zombieDiv.style.backgroundPositionX = 0 + "px";
//         progress = 0;
//         start = null;
//         requestAnimationFrame(step);
//     }
// }

/* Bonus 1 */
document.addEventListener('keydown', logkey);

function step (timestamp) {
    //calculate refresh time (timestamp - progress)
    let progress;
    if (start === null) start = timestamp;
    progress = timestamp - start;
    
    //display deltaTime
    if(!lastTime){lastTime= timestamp;}
    let deltaTime = lastTime - timestamp;
    console.log(deltaTime);
    lastTime = timestamp;

    // console.log(progress);
    //action for each frame
    //progress/n = animation speed
    zombieDiv.style.backgroundPositionX = -Math.min(100*Math.ceil(progress/150), 1000) + "px";    
    
    requestAnimationFrame(step);
}

requestAnimationFrame(step);

document.addEventListener('keydown', logkey);
function logkey(e){
    // console.log(e)
    switch (e.key){
        case "ArrowLeft":
            zombieDiv.style.transform = "scaleX(1)";
            zombiePosX -= moveSpeed;
            zombieDiv.style.left = zombiePosX + "px";
            console.log(zombieDiv.style.left);
            break;
        case "ArrowRight":
            zombieDiv.style.transform = "scaleX(-1)";
            zombiePosX += moveSpeed;
            zombieDiv.style.left = zombiePosX + "px";
            console.log(zombieDiv.style.left);
            break;
        case "ArrowUp":
            zombiePosY -= moveSpeed;
            zombieDiv.style.top = zombiePosY + "px";
            console.log(zombieDiv.style.top);
            break;
        case "ArrowDown":
            zombiePosY += moveSpeed;
            zombieDiv.style.top = zombiePosY + "px";
            console.log(zombieDiv.style.top);
            break;
    }
}

