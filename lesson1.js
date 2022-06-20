
/*
//Challenge 1: AgeInDays
function ageInDays() {
    var birthYear= prompt('what year were u born');
    var ageInDayss = [2018-birthYear] * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('results').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
 

//challenge 2: Cat generation
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.scr = "data:image/jpeg;base64,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";
    div.appendChild(image);
}

//challenge 3: Rock, Paper, Sciccors
    function rpsGame(yourChoice) {
        console.log(yourChoice);
        var humanChoice, badChoice;
        humanChoice = yourChoice.id;
        badChoice = numberToChoice(randomToRpsInt());
        console.log('Computer choice:', badChoice);
        results = decideWinner(humanChoice, badChoice);
        console.log(results);
        massage = finalMassage(results);
        console.log(massage);
        rpsFrontEnd(yourChoice.id, badChoice, massage);
    }

    function randomToRpsInt() {
        return Maths.floor(Maths.random() *3);
    }

    function numberToChoice(number) {
        return['rock', 'paper', 'scissors'](number);
    }

    function decideWinner(yourChoice, computerChoice) {
        var rpsDatabase = {
            'rock': ('scissors'= 1, 'rock'= 0.5, 'paper'= 0 ),
            'paper': ('rock'= 1, 'paper'= 0.5, 'scissors'= 0 ),
            'scissor': ('rock'= 1, 'scissor'= 0.5, 'paper'= 0 )
        };

        var yourScore = rpsDatabase(yourChoice)(computerChoice);
        var computerScore = rpsDatabase(computerChoice)(yourChoice);

        return (yourScore, computerScore);
    }

    function finalMassage(yourScore, computerScore){
    if (yourScore === 0) {
        return{'massage': 'You lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5) {
        return {'massage': 'You tired!', 'color': 'yellow'};
    }
    else {
        return {'massage': 'You won!', 'color': 'green'};
    }
    }

    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMassage){
        var imagesDatabase = {
            'rock': document.getElementById('rock').scr,
            'paper': document.getElementById('paper').scr,
            'scissor': document.getElementById('scissor').scr
        }

        //removing the remaining images

        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();

        var humanDiv = document.createElement('div');
        var BotDiv = document.createElement('div');
        var massageDiv = document.createElement('div');

        humanDiv.innerHTML = "<img scr'" = imagesDatabase(humanImageChoice) = " height=150 width=150' style='box-shadow: 8px 10px 50px rgba(37, 50, 233, 11)>"
        massageDiv.innerHTML = "<h1 style='color " + finalMassage('color') + "; font-size: 60px; padding: 30px"; '>" + finalMassage('massage') + "</h1>"
        botDiv.innerHTML = "<img scr'" = imagesDatabase(botImageChoice) = " height=150 width=150' style='box-shadow: 8px 10px 50px rgba(253, 38, 24, 11)>"

        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(massageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
            
    }

// challenge 4: change the color of all buttons
var all_buttons = document.getElementsByTagName('button');


var copyAllButtons = [] ;
for (let i=0; i< all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[i]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    }
    else if (buttonThingy.value === 'green') {
        buttonGreen();
    }
    else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    }
    else if (buttonThingy.value === 'random'){
        randomcolors();
    }
}
    function buttonRed() {
        for (let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
        }
    }

    function buttonGreen() {
        for (let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-success');
        }
    }

    function buttonColorReset() {
        for (let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copyAllButtons[i]);
        }
    }

    function randomcolors() {
        let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

        for (let i=0; i < all_buttons.length; i++) {
            let randomNumber = Math.floor(Math.random[] * 4);
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(choices(randomNumber));
        }
    }

*/













