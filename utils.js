function diceRoll(){
    return Math.abs(Math.floor(Math.random()*10) - 4);
}

module.exports = {
    diceRoll
}