/****************************************************
 * LEKTION 1 - Variabler, events og conditionals    *
 ****************************************************/

// Opgave 1
// Du skal i denne opgave redegøre for forskellen mellem en let, var og const.
// Det vil sige at du skal illustrere hvad der sker når man forsøger at ændre en
// var, en let og en const. Du skal bruge console.log til at demonstrere dette.

//// let
let myNumber = 6;
myNumber = 1;
console.log(myNumber);
//output:3

////var
var myAge = 23;
myAge = 99;
console.log(myAge);
//output:24

//// const
//  const myName = Michael;
//   myName = James;
//  console.log(myName);
//output:Uncaught ReferenceError: Michael is not defined

//_______________________________________________________________________________

// Opgave 2
// I denne opgave skal du bruge aritmetik til at lave nogle regnestykker.
// Du skal løse følgende:
// 992 + 237 = ?
var res = 992 + 237;
console.log('992+237=' + res);
// 44 - 12 = ?
var res = 44 - 12;
console.log('44-12=' + res);
// 142 * 23 = ?
var res = 142 * 23;
console.log('142x23=' + res);
// 94 / 23  = ?
var res = 94 / 23;
console.log('94/23=' + res);
// Svarene skal ligesom opgaven ovenfor vises i hver sin console.log

//_______________________________________________________________________________

// Opgave 3
// Du skal nu lave en click counter med et onclick event. Din click counter skal have en knap
// der gennem Javascript får tildelt en eventlistener. Antal af clicks skal vises i DOM´en.

function countClick() {
    let L1_4 = document.querySelector("#L1_4");
    let countButton = document.createElement('button');
    countButton.innerText = 'Click Me!'

    let clicksCounter = document.createElement('p');

    count = 0;
    countButton.addEventListener('click', () => {
        count++;
        clicksCounter.innerText = `this button has been clicked ${count} times`
    })

    L1_4.appendChild(countButton);
    L1_4.appendChild(clicksCounter);
}
countClick()


//_______________________________________________________________________________

// Opgave 4
// I denne opgave skal du lave et input felt med validering. Du skal bruge en eventlistener til at måle på om brugeren
// har indtastet mere end 8 bogstaver. Hvis ikke brugeren har indtastet mere en 8 bogstaver skal der vises en fejl besked
// under input feltet, der beder brugeren om at indtaste mindst 8 bogstaver.

// function validateThis() {
//     let thisDiv = document.querySelector("#validText");
//     let inputField = document.createElement('input')
//     inputField.type = 'text';
//     inputField.placeholder = 'write here';

//     let validateBtn = document.createElement('button');
//     validateBtn.innerText = 'GO!'
//     let validateRes = document.createElement('p');

//     validateBtn.addEventListener('click', () => {
//         let userInput = inputField.value.trim();
//         if (userInput.length < 8) {
//             validateRes.innerText = 'vi skal have mere end 8 bogstaver!!';
//         } else {
//             validateRes.innerText = 'fint!!'
//         }
//     })

//     thisDiv.appendChild(inputField)
//     thisDiv.appendChild(validateBtn)
//     thisDiv.appendChild(validateRes)
// }
// validateThis()

//_________________________________________________________________________________

// Opgave 5
// I denne opgave skal du indele en side i fire lige store firkanter. Du skal herefter bruge en eventlistener til at
// måle om brugeren fører musen ind over hver af de fire firkanter. Når musen rammer en firkant skal den skifte farve til en
// tilfældigt genereret farve.
function squareColor() {


    let squareSection = document.querySelector('#squareSection');
    let squareOne = document.createElement('div')
    squareOne.classList.add('square', 'color1');
    let squareTwo = document.createElement('div')
    squareTwo.classList.add('square', 'color2');
    let squareThree = document.createElement('div')
    squareThree.classList.add('square', 'color3');
    let squareFour = document.createElement('div')
    squareFour.classList.add('square', 'color4');

    squareOne.addEventListener('mouseover', () => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        squareOne.style.backgroundColor = "#" + randomColor;
    })
    squareOne.addEventListener('mouseout', () => {
        squareOne.style.backgroundColor = '';
    });

    squareTwo.addEventListener('mouseover', () => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        squareTwo.style.backgroundColor = "#" + randomColor;
    })
    squareTwo.addEventListener('mouseout', () => {
        squareTwo.style.backgroundColor = '';
    });

    squareThree.addEventListener('mouseover', () => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        squareThree.style.backgroundColor = "#" + randomColor;
    })
    squareThree.addEventListener('mouseout', () => {
        squareThree.style.backgroundColor = '';
    });

    squareFour.addEventListener('mouseover', () => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        squareFour.style.backgroundColor = "#" + randomColor;
    })
    squareFour.addEventListener('mouseout', () => {
        squareFour.style.backgroundColor = '';
    });
    squareSection.appendChild(squareOne)
    squareSection.appendChild(squareTwo)
    squareSection.appendChild(squareThree)
    squareSection.appendChild(squareFour)
}
squareColor()
//_________________________________________________________________________________

// Opgave 6
// I denne opgave skal du arbejde videre på input feltet fra opgave 5. Du skal nu tilføje følgende betingelser til valideringen.
//  - Brugeren skal indtaste et stort bogstav.
//  - Brugeren skal indtaste et tegn som ikke er et bogstav.
//  - Brugeren må ikke indtaste en string som er længere end 20 karakterer.

function validateThis() {
    let thisDiv = document.querySelector("#validText");
    let inputField = document.createElement('input')
    inputField.type = 'text';
    inputField.placeholder = 'write here';

    let validateBtn = document.createElement('button');
    validateBtn.innerText = 'GO!'
    let validateRes = document.createElement('p');

    validateBtn.addEventListener('click', () => {
        let userInput = inputField.value.trim();
        let capitalLetter = /[A-Z]/.test(userInput);
        let specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(userInput);

        if (userInput.length < 8) {
            validateRes.innerText = 'vi skal have mere end 8 bogstaver!!';
        } else if (userInput.length > 20) {
            validateRes.innerText = 'max 20 bogstaver!!';
        } else if (!capitalLetter) {
            validateRes.innerText = 'mindst 1 stort bogstav!!';
        } else if (!specialCharacter) {
            validateRes.innerText = 'mindst 1 specialtegn!!';
        } else {
            validateRes.innerText = 'fint!!';
        }
    });

    thisDiv.appendChild(inputField)
    thisDiv.appendChild(validateBtn)
    thisDiv.appendChild(validateRes)
}
validateThis()
//_________________________________________________________________________________
