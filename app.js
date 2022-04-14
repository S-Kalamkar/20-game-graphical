function run() {
    computerPlay();
    // console.log(card)
    // document.getElementById("card").innerHTML = card

}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9c6fadd99a75821a2352859d98e3f3f48f8fc94c
=======
>>>>>>> 49197a2fad0ac798f39d1cff40dc957c9e47f865
function restart() {
    location.reload();
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
function getCard() {
    var r = Math.floor(Math.random() *10 ) + 1
    if (r==1){
        r = "A"
    }
=======
>>>>>>> 9c6fadd99a75821a2352859d98e3f3f48f8fc94c
function ranNum() {
    var rng = Math.floor(Math.random() *10) +1
    // console.log(rng)
    return rng
=======
function ranNum() {
    var rng = Math.floor(Math.random() *10) +1
    console.log(rng);
    return rng;
>>>>>>> 49197a2fad0ac798f39d1cff40dc957c9e47f865
}

function cardType(num) {
    var value = num
    if (value==10) {
        var rType = Math.floor(Math.random() * 4 ) + 1
        if (rType==1) {
            value="J";
        } else if (rType==2) {
            value="Q";
        } else if (rType==3) {
            value="K";
        } else {
            value=10;
        }
    } else if(value==1) {
        value="A";
    }
    // console.log(value)
<<<<<<< HEAD
    return value
=======
    return value;
>>>>>>> 49197a2fad0ac798f39d1cff40dc957c9e47f865
}

function cardSuit() {
    var rSuit = Math.floor(Math.random() * 4 ) + 1;
    if (rSuit==1) {
        rSuit="C";
    } else if (rSuit==2) {
        rSuit="D";
    } else if (rSuit==3) {
        rSuit="H";
    } else {
        rSuit="S";
    }
<<<<<<< HEAD
    // console.log(rSuit)
    return rSuit
=======
    console.log(rSuit);
    return rSuit;
>>>>>>> 49197a2fad0ac798f39d1cff40dc957c9e47f865
}


function cardMake(type, suit) {
    var card = `<img src="Cards/${type}${suit}.jpg">`;
    return card;

}

function computerPlay(){
<<<<<<< HEAD
    var comNum = 0
    var talkDiv=document.getElementById("gameTalk")
    talkDiv.innerHTML = "The computer will go now!"
    var randnum = ranNum()
    var type = cardType(randnum)
    var suit = cardSuit()
    var card = cardMake(type, suit)
    
    do {
        var cardpull = 0
        cardpull++

        randnum = ranNum()
        type = cardType(randnum)
        suit = cardSuit()
        card = cardMake(type, suit)
        comNum = comNum + randnum
        console.log(randnum)
        document.getElementById("card").innerHTML = card
        
    } while (comNum < 16)

    talkDiv.innerHTML = `The computer got ${comNum}`
    return comNum
}
=======
    var comNum = 0;
    var talkDiv = document.getElementById("gameTalk");
    talkDiv.innerHTML = "The computer will go now!";
    var randNum = 0;
    var card = 0;
    var cards = [];
    
    do {
        randNum = ranNum();
        console.log(card);
        card = cardMake(cardType(randNum), cardSuit());
        cards.push(card);
        document.getElementById("card").innerHTML = cards;
        comNum = comNum + randNum;
        console.log(comNum);
        

    } while(comNum < 16)
    
    talkDiv.innerHTML = `The computer got ${comNum}!`;
>>>>>>> 49197a2fad0ac798f39d1cff40dc957c9e47f865

    return comNum;
}

<<<<<<< HEAD
=======
computerPlay()
<<<<<<< HEAD
// console.log(computerPlay())
=======
console.log(computerPlay())
>>>>>>> aebe8fff6049f1c95ced97e37a696d4dd05fd1f9
>>>>>>> 9c6fadd99a75821a2352859d98e3f3f48f8fc94c
=======
function userPlay(){
    
}
>>>>>>> 49197a2fad0ac798f39d1cff40dc957c9e47f865
