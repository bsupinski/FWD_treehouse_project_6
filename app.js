const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const resetBtn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
let lives = document.querySelectorAll('.tries img');
let missed = 0;
const letterTest =[]


const phrases = ['Robin', 'Batman', 'Justice League', 'Superman', 'Batgirl', 'Joker', 'Jason Todd', 'Dick Grayson', 'Wonder Woman', 'Harley Quinn'];


//listen for the start button to be pressed
resetBtn.addEventListener('click', ()=> {
    if ( resetBtn.textContent == 'Start Game' ){
    overlay.style.display='none';
    }if( resetBtn.textContent == 'Replay' ){
        //reset keyboard
        overlay.style.display='none';
        missed = 0
        let chosen = document.querySelectorAll('.chosen');
        for( let i=0; i < chosen.length; i++) {
            chosen[i].disabled = false;
            chosen[i].classList.remove('chosen');
        }
        //reset letter overlay
        let show = document.querySelectorAll('.show');
        for( let i=0; i < show.length; i++) {
            show[i].classList.remove('show');
        }
        //Heart img reset and missed count
        for (let i = 0; i < lives.length; i++) {
            lives[i].src="images/liveHeart.png"
        }
        //reset the phrase ul
        ul.textContent='';
        addPhrasetoDisplay(getRandomPhraseAsArray(phrases));
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
        event.target.disabled = true;
        let letterCheck = checkLetter(event.target)
        if ( letterCheck === null ){
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
        overlay.className = 'win';
        overlay.style.display='flex';
        overlay.firstChild.textContent="You win";
        resetBtn.textContent="Replay"
    }if( missed >=5 ){
        overlay.className = 'lose';
        overlay.style.display='flex';
        overlay.firstChild.textContent="You lose";
        resetBtn.textContent="Replay"

    }

}




addPhrasetoDisplay(getRandomPhraseAsArray(phrases));
