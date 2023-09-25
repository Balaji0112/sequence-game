let gridSize = 3;
let targetSequence = [];
currentStep = 1
function generateRandomSequence(length) {
    const sequence = [];
    for (let i = 1; i <= length; i++) {
        sequence.push(i);
    }
    return shuffleArray(sequence);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createGrid() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerText = targetSequence[i];
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener('click', () => checkNumber(targetSequence[i]));
    }
}

function checkNumber(number) {
    console.log(number)
    console.log(targetSequence)
    if (number === currentStep) {
        const gridItem = document.querySelector(`.grid-item:nth-child(${targetSequence.indexOf(number)+1})`);           
            gridItem.classList.add('correct');
            
        if (currentStep === 9) {
            setTimeout(() => {
                startGame();
                alert('Congratulations! You won!')
            }, 200);
            currentStep = 1
        }
        else{
            currentStep++;
            }
        }

    else{
        const gridItem = document.querySelector(`.grid-item:nth-child(${targetSequence.indexOf(number)+1})`);
        gridItem.classList.add('wrong');
        setTimeout(() => {
            alert('Game over! You lost!');
            startGame();
        }, 500);
        currentStep = 1
    }
}

function startGame() {
    targetSequence = generateRandomSequence(gridSize * gridSize);
    createGrid();
}

document.getElementById('startButton').addEventListener('click', startGame);

startGame();
