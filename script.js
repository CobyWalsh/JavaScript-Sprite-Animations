let playerState = "fall";
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change', function(e) { 
    playerState = e.target.value;
})
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImage = new Image();
playerImage.src = './assets/images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
let staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 7,
    },
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let postionX = j * spriteWidth;
        let postionY = index * spriteHeight
        frames.loc.push({x: postionX, y: postionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let postion = Math.floor(gameFrame/staggerFrames) % spriteAnimations["idle"].loc.length;
    frameX = spriteWidth * postion;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, 
        spriteHeight, spriteHeight, 0, 0, spriteWidth, spriteHeight);



//     if (gameFrame % staggerFrames == 0) {
//     if (frameX < 6) frameX++;
//     else frameX = 0;
// }
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();