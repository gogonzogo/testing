"use strict";

function squareSum(numbers) {
    const squaredNumSum = numbers.reduce((numberSquare, number) => {
        console.log(numberSquare + (number * number));
        return numberSquare + (number * number);
    }, 0);
    console.log(squaredNumSum);
};
squareSum([0]);

<form action="javascript:void(0);">
    <select>
        <optgroup label="Developer">
            <option value="frontend">Frontend</option> </optgroup>
        <optgroup label="Base skills">
            <option value="html" selected>HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option> </optgroup>
        <optgroup label="Frameworks" disabled>
            <option value="vue">Vue</option>
            <option value="react">React GraphQL</option>
            <option value="angular">Angular</option> </optgroup>
    </select>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
</form>



// // EDIT STRING TO CAMELCASE
// var camelCase = function (str) {
//     return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
//         return index == 0 ? word.toLowerCase() : word.toUpperCase();
// }).replace(/\s+/g, '');
// };
//         console.log(camelCase("Hello World today is a beautiful day"));


// str("Hello World");
    





// COLOR PALLETE
// const colors = [
//     { hex: '#008080', rgb: '0,128,128' },
//     { hex: '#000080', rgb: '0,0,128' },
//     { hex: '#008000', rgb: '0,128,0' },
//     { hex: '#800080', rgb: '128,0,128' },
//     { hex: '#C0C0C0', rgb: '192,192,192' },
//     { hex: '#00FFFF', rgb: '0,255,255' },
//     { hex: '#FFFF00', rgb: '255,255,0' },
//     { hex: '#FF0000', rgb: '255,0,0' },
//     { hex: '#00FF00', rgb: '0,255,0' },   
// ]

// const containerEl = document.querySelector('.js-container');
// const cardMarkup = createCardMarkup(colors);
// containerEl.insertAdjacentHTML('beforeend', cardMarkup);

// containerEl.addEventListener('click', onContainerElClick);

// function createCardMarkup(colorArray) {
//     return colorArray
//         .map(({hex, rgb}) => {
//             return `
//         <div class="color-card">
//             <div
//                 class="color-swatch"
//                 data-hex="${hex}"
//                 data-rgb="${rgb}"
//                 style="background-color: ${hex}"
//             ></div>
//             <div class="color-info">
//                 <p>HEX: ${hex}</p>
//                 <p>RGB: ${rgb}</p>
//             </div>
//         </div>`;
//             })
//             .join('')
// }

// function onContainerElClick(evt) {
//     const isColorSwatch = evt.target.classList.contains('color-swatch');
//     if (!isColorSwatch) {
//         return;
//     };

//     const currentColorActive = document.querySelector('.color-card.is-active')
//     if (currentColorActive) {
//         currentColorActive.classList.remove('is-active');
//     }
//     const swatchEl = evt.target;
//     const parentSwatchEl = swatchEl.closest('.color-card');
//     parentSwatchEl.classList.add('is-active');

//     document.body.style.backgroundColor= swatchEl.dataset.hex
// }
















// FILTER DELEGATION PART 2
/*const ul = document.querySelector('.list');
let selectedTag = new Set;

ul.addEventListener('click', handleCLick);

function handleCLick(evt) {
    const evtTarget = evt.target;
    if (evtTarget.nodeName !== "BUTTON") {
        return;
    } 
    
    
    const tag = evtTarget.dataset.value;
    evtTarget.classList.toggle('list__item-btn-active'); 
    const activeBtn = evtTarget.classList.contains('list__item-btn-active')

    if (activeBtn) {
        selectedTag.add(tag);
    } else {
        selectedTag.delete(tag);
    }
    

    console.log(selectedTag);

}

ul.setAttribute("style", "border: 1px solid black; display: flex; flex-wrap: wrap; list-style: none; width: 200px; margin-left: 500px;")*/














// BUTTON FILTER PART 1
/*const ul = document.querySelector('.list');

ul.addEventListener('click', handleCLick);

function handleCLick(evt) {
    const evtTarget = evt.target;
    if (evt.target.nodeName !== "BUTTON") {
        return;
    } 

    const currentActiveBtn = document.querySelector('.list__item-btn-active');
    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('list__item-btn-active')
    }
    console.log(currentActiveBtn);  

evtTarget.classList.add('list__item-btn-active')
    
    
}


ul.setAttribute("style", "border: 1px solid black; display: flex; flex-wrap: wrap; list-style: none; width: 200px; margin-left: 500px;")*/














// KAHOOT GAME DELEGATION
/*const containerEl = document.querySelector('.js-container');
const correctAnswer = 'Washington DC';

containerEl.addEventListener('click', handleClick);

function handleClick(e) {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    if (e.target.textContent === correctAnswer) {
        alert('You Win');
    } else {
        alert('You Lose');
    }
}

const ul = document.querySelector('ul');
const p = document.querySelector('p');
const li = document.querySelectorAll('li');
ul.setAttribute("style", "list-style: none; display: flex; justify-content: center;")
p.setAttribute("style", "display: flex; justify-content: center;")
li.setAttribute("style", "display: flex; flex-wrap: wrap; margin-right: 20px;")*/












// Create Button Delgation Example
/*const container = document.querySelector('.js-container');


container.addEventListener('click', onClick)

function onClick(evt) {
    if (evt.target.nodeName !== "BUTTON") {
        return;
    }
    console.log(evt.target.textContent);
}

const addButton = document.querySelector('.js-add-btn');
let label = 6;

addButton.addEventListener('click', onButtonClick);

function onButtonClick() {
    const button = document.createElement('button');
    button.textContent = `Button ${label}`;
    button.type = 'button';

    container.appendChild(button);
    label += 1;
}

addButton.setAttribute("style", "margin-bottom: 20px;");
container.setAttribute("style", "border: 1px solid black")*/