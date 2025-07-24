const monster = document.querySelector('.monsterImg');
const volume = document.querySelector('.volume');
const startButton = document.querySelector('.start-button');
const boxOfLevels = document.querySelector('.box-levelChoose');
const easy = document.querySelector('.easyDifficult');
const medium = document.querySelector('.mediumDifficult');
const hard = document.querySelector('.hardDifficult');
const typeWriter = document.querySelector('.greetingText');
const square1 = document.getElementById('1');
const square2 = document.getElementById('2');
const square3 = document.getElementById('3');
const square4 = document.getElementById('4');
const square5 = document.getElementById('5');
const square6 = document.getElementById('6');
const square7 = document.getElementById('7');
const square8 = document.getElementById('8');
const square9 = document.getElementById('9');
const result = document.querySelector('.score');

let isStarted = false;
let step = 0;
let score = 0;
let loseCounter = 0;
let isMusicAllowed = true;
let musicChanged = false;
let offAudio = false;
let difficulty = 1000;

function easyLevel() {
    difficulty = 1500;
    boxOfLevels.style.display = 'none';
}

function mediumLevel() {
    difficulty = 1000;
    boxOfLevels.style.display = 'none';
}

function hardLevel() {
    difficulty = 500;
    boxOfLevels.style.display = 'none';
}

function wait (ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
} 

function playMoveAudio() {
    const sound = new Audio('move.mp3');
    sound.volume = 0.5;
    sound.play();
}

let audio = new Audio("retro-game-arcade-236133.mp3");
audio.loop();

function playMusic () {
    if (offAudio) {
        audio.volume = 0;
        audio.pause();
    }
    else {
        audio.volume = 0.07;
        audio.play();
    }
}

function handleMute() {
    if (isMusicAllowed === false) {
        volume.src = 'img/icons8-speaker-40.png';
        isMusicAllowed = true;
        offAudio = false;
        playMusic();
    }
    else {
        volume.src = 'img/icons8-no-audio-40.png';
        isMusicAllowed = false;
        audio.volume = 0;
    }
}

function handleStart () {
    isStarted = true;
    typeWriter.style.display = 'none';
    console.log('Handle started');
    startButton.disabled = true;
    monsterMove(difficulty);
}

function handleStop() {
    isStarted = false;
    console.log('Handle stopped');
    startButton.disabled = false;
    boxOfLevels.style.display = 'block';
}

function handleReset() {
    monster.style.opacity = '1';
    score = 0;
    loseCounter = 0;
    result.textContent = `Score: ${score}`;
    boxOfLevels.style.display = 'block';
    square1.appendChild(monster);
    square1.style.backgroundColor = 'transparent';
    square1.style.opacity = '1';
    square2.style.backgroundColor = 'transparent';
    square2.style.opacity = '1';
    square3.style.backgroundColor = 'transparent';
    square3.style.opacity = '1';
    square4.style.backgroundColor = 'transparent';
    square4.style.opacity = '1';
    square5.style.backgroundColor = 'transparent';
    square5.style.opacity = '1';
    square6.style.backgroundColor = 'transparent';
    square6.style.opacity = '1';
    square7.style.backgroundColor = 'transparent';
    square7.style.opacity = '1';
    square8.style.backgroundColor = 'transparent';
    square8.style.opacity = '1';
    square9.style.backgroundColor = 'transparent';
    startButton.disabled = false;
    handleStop();
}

function clickSquare1() {
    if (step == 1) {
        square1.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function clickSquare2() {
    if (step == 2) {
        square2.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function clickSquare3() {
    if (step == 3) {
        square3.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function clickSquare4() {
    if (step == 4) {
        square4.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function clickSquare5() {
    if (step == 5) {
        square5.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function clickSquare6() {
    if (step == 6) {
        square6.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function clickSquare7() {
    if (step == 7) {
        square7.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function clickSquare8() {
    if (step == 8) {
        square8.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function clickSquare9() {
    if (step == 9) {
        square9.style.backgroundColor = 'transparent';
        score += 5;
        result.textContent = `Score: ${score}`;
        loseCounter--;
        playMoveAudio();
    }
}

function monsterConditionCheck() {
    if (step == 1) {
        square1.appendChild(monster);
        square1.style.backgroundColor = 'black';
        square1.style.opacity = '0.8';
        loseCounter++;
    }
    if (step == 2) {
        square2.appendChild(monster);
        square2.style.backgroundColor = 'black';
        square2.style.opacity = '0.8';
        loseCounter++;
    }
    if (step == 3) {
        square3.appendChild(monster);
        square3.style.backgroundColor = 'black';
        square3.style.opacity = '0.8';
        loseCounter++;
    }
    if (step == 4) {
        square4.appendChild(monster);
        square4.style.backgroundColor = 'black';
        square4.style.opacity = '0.8';
        loseCounter++;
    }
    if (step == 5) {
        square5.appendChild(monster);
        square5.style.backgroundColor = 'black';
        square5.style.opacity = '0.8';
        loseCounter++;
    }
    if (step == 6) {
        square6.appendChild(monster);
        square6.style.backgroundColor = 'black';
        square6.style.opacity = '0.8';
        loseCounter++;
    }
    if (step == 7) {
        square7.appendChild(monster);
        square7.style.backgroundColor = 'black';
        square7.style.opacity = '0.8';
        loseCounter++;
    }
    if (step == 8) {
        square8.appendChild(monster);
        square8.style.backgroundColor = 'black';
        square8.style.opacity = '0.8';
        loseCounter++;
    }
    if (step == 9) {
        square9.appendChild(monster);
        square9.style.backgroundColor = 'black';
        square9.style.opacity = '0.8';
        loseCounter++;
    }
}

async function monsterMove (ms) {
    if (isStarted) {
            if (score >= 100) {
                typeWriter.style.display = 'block';
                typeWriter.textContent = 'You Won! 🐱‍👤';
                handleStop();
                handleReset();
                return;
            }
            if (loseCounter == 9) {
                typeWriter.style.display = 'block';
                typeWriter.textContent = 'You Lose 🙁';
                handleStop();
                handleReset();
                return;
            }
            await wait(ms);
            const monsterSteps = Math.floor(Math. random() * (10 - 1) + 1);
            step = monsterSteps;
            console.log('Monster started and step is ' + monsterSteps);
            monsterConditionCheck();  
            monsterMove(ms);
    }
}
