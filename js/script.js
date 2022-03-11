function playGame(playerInput) {
	clearMessages();
	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return "kamień";
		} else if (argMoveId == 2) {
			return "papier";
		} else if (argMoveId == 3) {
			return "nożyce";
		}
		printMessage("Nie znam ruchu o id " + argMoveId + ".");
		return "nieznany ruch";
	}

	function displayResult(argComputerMove, argPlayerMove) {
		console.log("moves:", argComputerMove, argPlayerMove);

		if (
			(argComputerMove == "kamień" && argPlayerMove == "papier") ||
			(argComputerMove == "papier" && argPlayerMove == "nożyce") ||
			(argComputerMove == "nożyce" && argPlayerMove == "kamień")
		) {
			printMessage("Ty wygrywasz!");
		} else if (
			(argComputerMove == "papier" && argPlayerMove == "kamień") ||
			(argComputerMove == "nożyce" && argPlayerMove == "papier") ||
			(argComputerMove == "kamień" && argPlayerMove == "nożyce")
		) {
			printMessage("Wygrał komputer!");
		} else if (argComputerMove == argPlayerMove) {
			printMessage("Mamy Remis! Zagraj ponowanie");
		}
	}

	function printMessage(msg) {
		const div = document.createElement("div"); // change let
		div.innerHTML = msg;
		document.getElementById("messages").appendChild(div);
	}

	function clearMessages() {
		document.getElementById("messages").innerHTML = "";
	}

	const randomNumber = Math.floor(Math.random() * 3 + 1); // change let
	console.log("Wylosowana liczba to: " + randomNumber);

	const computerMove = getMoveName(randomNumber); // change let

	printMessage("Mój ruch to: " + computerMove);

	console.log("Gracz wpisał: " + playerInput);

	const playerMove = getMoveName(playerInput); // change let

	printMessage("Twój ruch to: " + playerMove);

	displayResult(computerMove, playerMove);
}

function rockClicked() {
	playGame("Wybrałes Kamień");
}
const rockButton = document.getElementById("play-rock"); // change let
rockButton.addEventListener("click", rockClicked);

function paperClicked() {
	playGame("Wybrałes papier");
}
const paperButton = document.getElementById("play-paper"); // change let
paperButton.addEventListener("click", paperClicked);

function scissorsClicked() {
	playGame("Wybrałeś nozyczki");
}
const scissorsButton = document.getElementById("play-scissors"); // change let
scissorsButton.addEventListener("click", scissorsClicked);
