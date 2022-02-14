function startGame() {
    //start a new game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = "Welcome to the MultiMath! starting new game..";
}
document.getElementById('startGame').addEventListener('click', startGame);
