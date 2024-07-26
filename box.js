function pickBox () {
    const mainElement = document.querySelector('.js-box')
     .addEventListener('click', () => {
        chanceBox();
     }
);
}



function chanceBox() {


    const randomNumber = Math.random();

    let computerMove = '';
    
    if(randomNumber >= 0 && randomNumber < 1 / 20) {
        computerMove = 'greenshell';
    } else if (randomNumber >= 1 / 19 && randomNumber < 2 / 19) {
        computerMove = 'redshell';
    } else if (randomNumber >= 2 / 19 && randomNumber <  3 / 19) {
        computerMove = 'banana';
    } else if (randomNumber >= 3/ 19 && randomNumber < 4 / 19) {
        computerMove = 'fig';
    } else if (randomNumber >= 4 / 19 && randomNumber < 5 / 19) {
        computerMove = 'mushroom';
    } else if (randomNumber >= 5 / 19 && randomNumber < 6 / 19) {
        computerMove = 'triple-mushroom';
    } else if (randomNumber >= 6 / 19 && randomNumber < 7 / 19) {
        computerMove = 'bomb';
    } else if (randomNumber >= 7 / 19 && randomNumber < 8 / 19) {
        computerMove = 'blue-shell';
    } else if (randomNumber >= 8 / 19 && randomNumber < 9 / 19) {
        computerMove = 'lightning';
    } else if (randomNumber >= 9 / 19 && randomNumber < 10 / 19) {
        computerMove = 'star';
    } else if (randomNumber >= 10 / 19 && randomNumber < 11 / 19) {
        computerMove = 'golden-mushroom';
    } else if (randomNumber >= 11/ 19 && randomNumber < 12 / 19) {
        computerMove = 'mega-mushroom';
    } else if (randomNumber >= 12 / 19 && randomNumber < 13 / 19) {
        computerMove = 'pow-block';
    } else if (randomNumber >= 13 / 19 && randomNumber < 14 / 19) {
        computerMove = 'thundercloud';
    } else if (randomNumber >= 14 / 19 && randomNumber < 15 / 19) {
        computerMove = 'bullet';
    } else if (randomNumber >= 15 / 19 && randomNumber < 16 / 19) {
        computerMove = 'triple-green-shell';
    } else if (randomNumber >= 16 / 19 && randomNumber < 17 / 19) {
        computerMove = 'triple-red-shell';
    } else if (randomNumber >= 17 / 19 && randomNumber < 18 / 19) {
        computerMove = 'triplebananas';
    } else if (randomNumber >= 18 / 19 && randomNumber < 19 / 19) {
        computerMove = 'blooper'
    } 

    return computerMove;

    pickBox();

    /* make sure you do    1 / 20 then 2 / 20 NOT JUST 1 / 20*/
}



const imgElement = document.querySelector('.js-img');
imgElement.src = `box-images/${chanceBox()}-mk.png`;










// fix photo issue
// thenwork on addEventListener 
