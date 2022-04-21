var com
var comNum = 0;
var user
var userNum = 0
var userCard = 0;
var userCards = [];

function runComp() {
    com = computerPlay();
    console.log(user)
    console.log(com)
    setTimeout(comapre, 1000, user ,com)
}

function runUser() {
    user = userPlay()
}

function restart() {
    location.reload();
}

function ranNum() {
    var rng = Math.floor(Math.random() *10) +1
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
    } else if((value==1) || (value == 11)) {
        value="A";
    }

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

    return rSuit;
}


function cardMake(type, suit) {
    var card = `<img src="Cards/${type}${suit}.jpg">`;
    return card;

}

function computerPlay(){
    console.log(user)
    console.log(com)
    if (comNum > 20) {
        return comNum
    }
    var talkDiv = document.getElementById("gameTalk");
    talkDiv.innerHTML = "The computer will go now!";
    var randNum = 0;
    var comCard = 0;
    var comCards = [];
    
    do {
        randNum = ranNum();
        if (randNum == 1) {
            if (comNum+11 <= 16) {
                randNum = 11
            } else {
                randNum = 1
            }
        };

        comCard = cardMake(cardType(randNum), cardSuit());
        comCards.push(comCard);
        document.getElementById("comCard").innerHTML = comCards;
        comNum = comNum + randNum;
        
    } while(comNum < 16)
    
    talkDiv.innerHTML = `The computer got ${comNum}!`;
    document.getElementById("main").onclick = ""
    document.getElementById("stand").onclick = ""
    
    return comNum;
}

function userPlay(){
    var talkDiv = document.getElementById("gameTalk");
 
    var num = ranNum()
    if (num == 1) {
        if (userNum+11 <= 16) {
            num = 11
        } else {
            num = 1
        }
    };

    userCard = cardMake(cardType(num), cardSuit()) 
    userCards.push(userCard);
    document.getElementById("userCard").innerHTML = userCards;
    userNum = userNum + num
    talkDiv.innerHTML = `You have ${userNum}`


    if (userNum > 20) {
        talkDiv.innerHTML = "You busted! The computer will go now!";
        document.getElementById("main").onclick = ""
        document.getElementById("stand").onclick = ""
        setTimeout(runComp, 1000)

        return userNum
    }
    return userNum
}

function comapre(userValue, comValue) {
    var talkDiv = document.getElementById("gameTalk");
    var comScore = 0
    var userScore = 0

    if (userValue > 20){
        talkDiv.innerHTML = `You busted! The computer won with a score of ${comValue}!`;
        comScore++
    } else if (comValue > 20) {
        talkDiv.innerHTML = `The computer busted! You won with a score of ${userValue}!`;
        userScore++
    } else if (userValue > comValue) {
        talkDiv.innerHTML = `You won! The computer got a score of ${comValue} and you got a score of ${userValue}.`
        userScore++
    } else if (userValue < comValue) {
        talkDiv.innerHTML = `The computer won! The computer got a score of ${comValue} and you got a score of ${userValue}.`
        userScore++
    } else {
        talkDiv.innerHTML = `You tied!. You and the computer both got a score of ${userValue}`
    }
}