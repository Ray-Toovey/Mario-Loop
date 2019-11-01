// Mario Item Simulator
'use strict';

//event listener
document.getElementById('getItem').addEventListener('click', determineItem);
document.getElementById('five').addEventListener('click', runFive);
document.getElementById('getbill').addEventListener('click', tenBill);
document.getElementById('customNum').addEventListener('click', runXTimes);

//variables
let image = document.getElementById('mainImg');
let word = document.getElementById('itemWord');
let numBanana = 0;
let numBill = 0;
let numGold = 0;
let numShell = 0;
let numStar = 0;
let numtotal = 0;

function determineItem() {
    //set player position
    let place = document.getElementById('position').value;
    //determine for 1-6
    if (place ==0 || place >12){
        image.src = "images/confused.png";
        document.getElementById('invalid').innerHTML = "Invalid Player Position.";
        word.innerHTML = " ";
    } else if (place < 6){
        let randNum = Math.random();
        if (randNum <= .45){
            image.src = "images/Banana.png";
            word.innerHTML = "Banana!";
            document.getElementById('invalid').innerHTML = " ";
            numBanana++;
            numtotal++;
        document.getElementById('banana').innerHTML = numBanana;
        document.getElementById('total').innerHTML = numtotal;
        } else if (randNum <= .80){
            image.src = "images/GreenShell.png";
            word.innerHTML = "Geeen Shell!";
            document.getElementById('invalid').innerHTML = " ";
            numShell++;
            numtotal++;
        document.getElementById('shell').innerHTML = numShell;
        document.getElementById('total').innerHTML = numtotal;
        } else if (randNum <= .95){
            image.src = "images/Star.png";
            word.innerHTML = "Star!";
            document.getElementById('invalid').innerHTML = " ";
            numStar++;
            numtotal++;
        document.getElementById('star').innerHTML = numStar;
        document.getElementById('total').innerHTML = numtotal;
        } else if (randNum <=.99){
            image.src = "images/Gold.png";
            word.innerHTML = "Golden Mushroom!";
            document.getElementById('invalid').innerHTML = " ";
            numGold++;
            numtotal++;
        document.getElementById('gold').innerHTML = numGold;
        document.getElementById('total').innerHTML = numtotal;
        } else {
            image.src = "images/Bullet_Bill.png";
            word.innerHTML = "Bullet Bill!";
            document.getElementById('invalid').innerHTML = " ";
            numBill++;
            numtotal++;
        document.getElementById('bill').innerHTML = numBill;
        document.getElementById('total').innerHTML = numtotal;
        }
    //determine for 7-12
    } else if (place < 12){ 
    let randNum = Math.random();
        if (randNum <= .05){
            image.src = "images/Banana.png";
            word.innerHTML = "Banana";
            document.getElementById('invalid').innerHTML = " ";
            numBanana++;
            numtotal++;
        document.getElementById('banana').innerHTML = numBanana;
        document.getElementById('total').innerHTML = numtotal;
        } else if (randNum <= .10){
            image.src = "images/GreenShell.png";
            word.innerHTML = "Green Shell!";
            document.getElementById('invalid').innerHTML = " ";
            numShell++;
            numtotal++;
        document.getElementById('shell').innerHTML = numShell;
        } else if (randNum <= .35){
           image.src = "images/Star.png";
           word.innerHTML = "Star!";
           document.getElementById('invalid').innerHTML = " ";
           numStar++;
           numtotal++;
        document.getElementById('star').innerHTML = numStar;
        document.getElementById('total').innerHTML = numtotal;
        } else if (randNum <=.70){
            image.src = "images/Gold.png";
            word.innerHTML ="Golden Mushroom!";
            document.getElementById('invalid').innerHTML = " ";
            numGold++;
            numtotal++;
        document.getElementById('gold').innerHTML = numGold;
        document.getElementById('total').innerHTML = numtotal;
        } else {
            image.src = "images/Bullet_Bill.png";
            word.innerHTML = "Bullet Bill!";
            document.getElementById('invalid').innerHTML = " ";
            numBill++;
            numtotal++;
        document.getElementById('bill').innerHTML = numBill;
        document.getElementById('total').innerHTML = numtotal;
        }
    }
}

function runFive(){
    for(let n = 0; n < 5; n++){
        determineItem();
    }
}

function tenBill(){
    while(numBill <10){
        determineItem();
    }
}

function runXTimes(){
    let X = document.getElementById('times').value;
    for(let numtotal = 0; numtotal < X; numtotal++){
        determineItem();
    }
}