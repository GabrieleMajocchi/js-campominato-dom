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

const main = document.querySelector("main");
const Play = document.querySelector('#play')

Play.addEventListener('click', function (){
        
        let bombs = randomfill( 16 , 1 , cells )
        main.classList.remove('bomb');
        gridElement.innerHTML= '';
        gridElement.className = 'grid';
        let count = 0;
        for (let i = 1; i <= cells; i++) {
            const actualCell = createElement('div', 'cell', gamedifficulty);
            actualCell.innerHTML = i;
            actualCell.addEventListener('click', myfunction);
            function myfunction (){
                if(bombs.includes(parseInt(actualCell.innerHTML))){
                    gridElement.innerHTML= '';
                    main.classList.add('bomb');
                    console.log('Hai perso!');
                    console.log('Con un totale di:'+count+' punti');
                    actualCell.removeEventListener('click', myfunction);
                }else if(count === (cells - (bombs.length)-1)){
                    console.log('Hai vinto!');
                    gridElement.innerHTML= '';
                    main.classList.add('win');
                }else{
                    actualCell.classList.toggle('selected');
                    count++;
                    console.log(i);
                    actualCell.removeEventListener('click', myfunction);
                }
            }
            gridElement.appendChild(actualCell);
        }
        console.log(bombs);
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

/**
 * A function that will return a random number that are between max and min
 * @param {number} min Lowest number that can be generated
 * @param {number} max Maximum number that can be generated
 */
function randomNumGen(min, max){
    let random = Math.floor(Math.random() * max) + min;
    return random;
}

/**
 * A function that will add an ammoun of random number that are not the same between them based on how many elements we ask
 * @param {number} elements Write the ammount of elements you want to insert in the array
 * @param {number} min Lowest number that can be generated
 * @param {number} max Maximum number that can be generated
 */
function randomfill(elements, min, max){
    const numList = [];

    while (numList.length < elements){
        let random = randomNumGen(min, max);
        if (!numList.includes(random)){
            numList.push(random);
        }
    }
    numList.sort((a, b) => a - b);
    return numList;
}