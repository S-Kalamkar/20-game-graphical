function run() {
    var card = cardMake(cardType(ranNum()), cardSuit())
    // console.log(card)
    document.getElementById("card").innerHTML = card

}

<<<<<<< HEAD
function restart() {
    location.reload()
}

function getCard() {
    var r = Math.floor(Math.random() *10 ) + 1
    if (r==1){
        r = "A"
    }
=======
function ranNum() {
    var rng = Math.floor(Math.random() *10) +1
    console.log(rng)
    return rng
}
>>>>>>> aebe8fff6049f1c95ced97e37a696d4dd05fd1f9

function cardType(num) {
    var value = num
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
    console.log(value)
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
    console.log(rSuit)
    return rSuit
}


function cardMake(type, suit) {
    var card = `<img src="Cards/${type}${suit}.jpg">`
    return card

}

function computerPlay(){
    var comNum = 0
    var talkDiv=document.getElementById("gameTalk")
    talkDiv.innerHTML = "The computer will go now!"
    
    do {
        comNum = comNum + cardType()

    } while (comNum < 16)
    return comNum
}

<<<<<<< HEAD
}

=======
computerPlay()
console.log(computerPlay())
>>>>>>> aebe8fff6049f1c95ced97e37a696d4dd05fd1f9
