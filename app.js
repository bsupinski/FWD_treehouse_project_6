const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const resetBtn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
let missed = 0;
const letterTest =[]


const phrases = ['Robin is best boy', 'Up up and away', 'To infinity and beyond', 'Pillow Pants', 'Lysterfiend'];


//listen for the start button to be pressed
resetBtn.addEventListener('click', ()=> {
    if ( resetBtn.textContent == 'Start Game' ){
    overlay.style.display='none';
    }if( resetBtn.textContent == 'Replay' ){
        overlay.style.display='none';
        let chosen = document.getElementsByClassName('chosen');
        chosen.classList.remove('chosen');
    }
});

//Chooses a random string from phrases
function getRandomPhraseAsArray(array){
    let chosenPhrase  = Math.floor(Math.random() * array.length)
    return array[chosenPhrase];
};

//adds the letter of a string to the display
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


//Check if letter is in the phrase
function checkLetter (clickedButton) {
    const checkLetter = document.querySelectorAll('li');
    let match = null;
    for ( i = 0; i < checkLetter.length; i++) {
        if ( checkLetter[i].textContent.toLowerCase() == clickedButton.textContent.toLowerCase() ) {
            checkLetter[i].classList.add("show");
            match = checkLetter[i].textContent;
        }
    }
    return match;
};


//listens to see if onscreen keyboard is clicked.
qwerty.addEventListener("click", (event)=> {
    if ( event.target.tagName === 'BUTTON' ){
        event.target.classList.add('chosen');
        let letterCheck = checkLetter(event.target)
        if ( letterCheck === null ){
            const lives = document.querySelectorAll('.tries img');
            lives[missed].src="images/lostHeart.png"
            missed++;
        }
        checkWin();
    }; 
})

//check if the game has been won or lossed
function checkWin() {
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    if ( letter.length === show.length ) {
        overlay.classList.add('win');
        overlay.style.display='flex';
        overlay.firstChild.textContent="You win";
        resetBtn.textContent="Replay"
    }if( missed >=5 ){
        overlay.classList.add('lose');
        overlay.style.display='flex';
        overlay.firstChild.textContent="You lose";
        resetBtn.textContent="Replay"

    }

}




addPhrasetoDisplay(getRandomPhraseAsArray(phrases));
