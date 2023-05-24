// ? recupero il wrapper
const gridElement = document.getElementById('grid');

let cells = 100;
let gamedifficulty = 'easy';

const diff = document.getElementById("diff");
diff.addEventListener('click', function(){
    gamedifficulty = diff.options[diff.selectedIndex].text;

    if(gamedifficulty === 'easy'){
        cells = 100;
    }else if(gamedifficulty === 'medium'){
        cells = 81;
    }else if(gamedifficulty === 'hard'){
        cells = 49;
    }
}
)

const Play = document.querySelector('#play')

Play.addEventListener('click', 
    function(){
        
        gridElement.innerHTML= '';
        gridElement.className = 'grid';
        for (let i = 1; i <= cells; i++) {
            const actualCell = createElement('div', 'cell', gamedifficulty);
            actualCell.innerHTML = i;
            actualCell.addEventListener('click', function(){
                actualCell.classList.toggle('selected');
                console.log(i);
            });
        
            gridElement.appendChild(actualCell)
        }
    }
)


// // ----------------
// // ----Function----
// // ----------------

/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * @param {string} tagName The tag of the element to be created as a string
 * @param {string} className The classes of the element to be created as a string
 * @param {string} difficulty The difficulty of the game
 */
function createElement(tagName, className, difficulty){
    const cellElement = document.createElement(tagName);
    cellElement.className = className + ' ' + difficulty;
    return cellElement;
}

