window.addEventListener("DOMContentLoaded", ()=>{
    //compatibilité navigateurs
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    //Getting the element and image
    const zombieDiv = document.getElementById("zombietomb");
    zombieDiv.style.position = "relative";
    zombieDiv.style.backgroundImage = "url('./img/zombie.png')";

    //animation Parameters
    const zombie = {};
    zombie.width = 100;
    zombie.position = 0;
    zombie.positionMax = 11;
    zombie.delay = 2000/zombie.positionMax;
    let animationId = requestAnimationFrame(zombieAnim);



    //requestAnimationFrame
    function zombieAnim(){
        zombieDiv.style.backgroundPositionX = -zombie.width*zombie.position + "px";
        zombie.position ++;

        console.log(animationId);
        
        if(zombie.position > zombie.positionMax){
            zombieDiv.style.backgroundPositionX = zombie.positionMax;
            cancelAnimationFrame(animationId);
        }
        setTimeout(function(){requestAnimationFrame(zombieAnim)}, zombie.delay);
    }
})


// //Moving the zombie
// document.addEventListener('keydown', logkey);
// function logkey(e){
//     // console.log(e)
//     switch (e.key){
//         case "ArrowLeft":
//             zombieDiv.style.transform = "scaleX(1)";
//             zombiePosX -= moveSpeed;
//             zombieDiv.style.left = zombiePosX + "px";
//             console.log(zombieDiv.style.left);
//             break;
//         case "ArrowRight":
//             zombieDiv.style.transform = "scaleX(-1)";
//             zombiePosX += moveSpeed;
//             zombieDiv.style.left = zombiePosX + "px";
//             console.log(zombieDiv.style.left);
//             break;
//         case "ArrowUp":
//             zombiePosY -= moveSpeed;
//             zombieDiv.style.top = zombiePosY + "px";
//             console.log(zombieDiv.style.top);
//             break;
//         case "ArrowDown":
//             zombiePosY += moveSpeed;
//             zombieDiv.style.top = zombiePosY + "px";
//             console.log(zombieDiv.style.top);
//             break;
//     }
// }

