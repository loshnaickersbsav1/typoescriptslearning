function startGame() {
    
    //start a new game
    var messagesElement = document.getElementById('messages');
    /*
    if (messagesElement != null)
    {
    messagesElement.innerText = "Welcome to the MultiMath! starting new game..";
    } */
    messagesElement!.innerText = "Welcome to the MultiMath! starting new game..";

    //else messagesElement = "-";
}

var startGameID = document.getElementById('startGame');
// if (startGameID != null)
// {
//     startGameID.addEventListener('click', startGame);
// }
startGameID!.addEventListener('click', startGame);