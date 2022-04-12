function run() {
    getCard()
    console.log(getCard())
}

function ranNum() {
    var rng = Math.floor(Math.random() *10) +1
}

function cardType(value) {
    if (value==10) {
        var rType = Math.floor(Math.random() * 4 ) + 1
        if (rType==1) {
            value="J"
        } else if (rType==2) {
            value="Q"
        } else if (rType==3) {
            value="K"
        } else {
            value=10
        }
    } else if(value==1) {
        value="A"
    }
    return value
}

function cardSuit() {
    var rSuit = Math.floor(Math.random() * 4 ) + 1
    if (rSuit==1) {
        rSuit="C"
    } else if (rSuit==2) {
        rSuit="D"
    } else if (rSuit==3) {
        rSuit="H"
    } else {
        rSuit="S"
    }
    return rSuit
}


function cardMake(type, suit) {
    

}

function computerPlay(){
    var comNum = 0
    var talkDiv=document.getElementById("gameTalk")
    talkDiv.innerHTML = "The computer will go now!"
    
    do {
        comNum = comNum + getCard()

    } while (comNum < 16)
    return comNum
}

computerPlay()
console.log(computerPlay())