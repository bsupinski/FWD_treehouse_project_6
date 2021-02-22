const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const resetBtn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
const missed = 0;
const letterTest =[]


const phrases = ['Robin is best boy', 'Up up and away', 'To infinity and beyond', 'Pillow Pants', 'Lysterfiend'];

resetBtn.addEventListener('click', ()=> {
    overlay.style.display='none'
});

//Chooses a random string from phrases
function getRandomPhraseAsArray(array){
    let chosenPhrase  = Math.floor(Math.random() * array.length)
    return array[chosenPhrase];
};

function addPhrasetoDisplay (chosenPhrase) {
    for ( let i = 0; i < chosenPhrase.length; i++){
        const li = document.createElement("li");
        li.textContent = chosenPhrase[i];
        ul.appendChild(li);
        if ( li.textContent == " ") {
            li.className = "space"
        }else {
            li.className ="letter"
        }
    }
};

function checkLetter (clickedButton) {
    const checkLetter = document.querySelectorAll('li');
    let match = null;
    for ( i = 0; i < checkLetter.length; i++) {
        if ( checkLetter[i].textContent.toLowerCase() == clickedButton ) {
            checkLetter[i].classList.add("show");
            match += checkLetter[i];
            console.log(match)
        }
        
    }
    console.log(checkLetter[i]);
    
};


addPhrasetoDisplay(getRandomPhraseAsArray(phrases));
