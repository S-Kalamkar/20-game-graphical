function run() {
    computerPlay();
    // console.log(card)
    // document.getElementById("card").innerHTML = card
    talking()

}

function talking() {
    document.getElementById("gameTalk").style.backgroundColor="white"
    document.getElementById("gameTalk").style.fontSize="30px"
    document.getElementById("gameTalk").style.padding="20px"
    document.getElementById("gameTalk").style.width="80px"
    document.getElementById("gameTalk").style.margin="0%"
    document.getElementById("gameTalk").style.color="black"
}

function restart() {
    location.reload();
}

function ranNum() {
    var rng = Math.floor(Math.random() *10) +1
    console.log(rng);
    return rng;
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
    return value;
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
    console.log(rSuit);
    return rSuit;
}


function cardMake(type, suit) {
    var card = `<img src="Cards/${type}${suit}.jpg">`;
    return card;

}

function computerPlay(){
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

    return comNum;
}

function userPlay(){
    
}
