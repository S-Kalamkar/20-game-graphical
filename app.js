function run() {
    getCard()
}

function restart() {
    location.reload()
}

function getCard() {
    var r = Math.floor(Math.random() *10 ) + 1
    if (r==1){
        r = "A"
    }

    if (r==10) {
        var rf = Math.floor(Math.random() * 4 ) + 1
        if (rf==1) {
            r="J"
        } else if (rf==2) {
            r="Q"
        } else if (rf==3) {
            r="K"
        } else {
            r=10
        }
    }
    console.log(r)

    var rt = Math.floor(Math.random() * 4 ) + 1
    if (rt==1) {
        rt="C"
    } else if (rt==2) {
        rt="D"
    } else if (rt==3) {
        rt="H"
    } else {
        rt="S"
    }
    document.getElementById("card").innerHTML = "<img src=Cards/"+ r + rt +".jpg>"

}

