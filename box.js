


function chanceBox() {
    const randomNumber = Math.random();

    let computerMove = '';
    
    if(randomNumber >= 0 && randomNumber < 1 / 20) {
        computerMove = 'greenshell';
    } else if (randomNumber >= 1 / 20 && randomNumber < 2 / 20) {
        computerMove = 'redshell';
    } else if (randomNumber >= 2 / 20 && randomNumber <  3 / 20) {
        computerMove = 'banana';
    } else if (randomNumber >= 3/ 20 && randomNumber < 4 / 20) {
        computerMove = 'fig';
    } else if (randomNumber >= 4 / 20 && randomNumber < 5 / 20) {
        computerMove = 'mushroom';
    } else if (randomNumber >= 5 / 20 && randomNumber < 6 / 20) {
        computerMove = 'triple-mushroom';
    } else if (randomNumber >= 6 / 20 && randomNumber < 7 / 20) {
        computerMove = 'bomb';
    } else if (randomNumber >= 7 / 20 && randomNumber < 8 / 20) {
        computerMove = 'blue-shell';
    } else if (randomNumber >= 8 / 20 && randomNumber < 9 / 20) {
        computerMove = 'lightning';
    } else if (randomNumber >= 10 / 20 && randomNumber < 11 / 20) {
        computerMove = 'star';
    } else if (randomNumber >= 11 / 20 && randomNumber < 12 / 20) {
        computerMove = 'golden-mushroom';
    } else if (randomNumber >= 12 / 20 && randomNumber < 13 / 20) {
        computerMove = 'mega-mushroom';
    } else if (randomNumber >= 13 / 20 && randomNumber < 14 / 20) {
        computerMove = 'pow-block';
    } else if (randomNumber >= 14 / 20 && randomNumber < 15 / 20) {
        computerMove = 'thundercloud';
    } else if (randomNumber >= 15 / 20 && randomNumber < 16 / 20) {
        computerMove = 'bullet';
    } else if (randomNumber >= 16 / 20 && randomNumber < 17 / 20) {
        computerMove = 'triple-green-shell';
    } else if (randomNumber >= 17 / 20 && randomNumber < 18 / 20) {
        computerMove = 'triple-red-shell';
    } else if (randomNumber >= 18 / 20 && randomNumber < 19 /20) {
        computerMove = 'triplebananas';
    } else if (randomNumber >= 19 && randomNumber < 20 / 20) {
        computerMove = 'blooper'
    } 

    return computerMove;
    

    /* make sure you do    1 / 20 then 2 / 20 NOT JUST 1 / 20*/
}



const imgElement = document.querySelector('.js-img');
imgElement.src = `box-images/${chanceBox()}-mk.png`;

console.log(imgElement.innerHTML);








// fix photo issue
// thenwork on addEventListener 