let firstCard = getRandomCard()
let secondCard = getRandomCard()
let thirdCard = getRandomCard()
let isAlive = true
let hasBlackJack = false







let cards = [firstCard, secondCard] //ordered list of otems
cards.push(thirdCard)


function getRandomCard(){
    
    return Math.floor(1+Math.random()*6)
}



let sum = firstCard + secondCard;
let message = ""
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")


function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "Woohoo! You have got Blackjack."
    }
    else {
        message = "You are out of the game."
    }
    document.querySelector("#message-el").textContent = message;
    sumEl.textContent = "Sum:" + sum 
    cardsEl.textContent = "Cards: " + cards[0] + " , "+ cards[1];
}
function renderGame2() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "Woohoo! You have got Blackjack."
        hasBlackJack = true
        window.alert("Woohooo!! You have got Blackjack. Refresh the page if you want to play another round!!.")
    }
    else {
        message = "You are out of the game."
        isAlive = false
    }
    document.querySelector("#message-el").textContent = message;
    sumEl.textContent = "Sum: " + sum 
    cardsEl.textContent = "Cards: " + cards[0] + " , "+ cards[1] + " , " + cards[2] ;
}



function newCard() {

    if (isAlive === true && hasBlackJack ===false) {
    let thirdCard = getRandomCard()
    sum += thirdCard;
    
    renderGame2()
    console.log(thirdCard)}
    if(isAlive===false){
    window.alert("OOPPS! You are Out. Refresh the window to play again.")}
    
}
function startGame() {
    renderGame()
}

