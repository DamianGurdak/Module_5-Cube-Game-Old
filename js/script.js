function playGame(playerInput) {
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
		} else if (argComputerMove == argPlayerMove) {
			printMessage("Mamy Remis! Zagraj ponowanie");
		} else {
			printMessage("Wygrał komputer!");
		}
	}

	function printMessage(msg) {
		const div = document.createElement("div");
		div.innerHTML = msg;
		document.getElementById("messages").appendChild(div);
	}

	const clearMessages = function () {
		document.getElementById("messages").innerHTML = "";
	};

	clearMessages();

	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log("Wylosowana liczba to: " + randomNumber);

	const computerMove = getMoveName(randomNumber);

	printMessage("Mój ruch to: " + computerMove);

	console.log("Gracz wpisał: " + playerInput);

	const playerMove = getMoveName(playerInput);

	printMessage("Twój ruch to: " + playerMove);

	displayResult(computerMove, playerMove);
}

function rockClicked() {
	playGame(1);
}
const rockButton = document.getElementById("play-rock");
rockButton.addEventListener("click", rockClicked);

function paperClicked() {
	playGame(2);
}
const paperButton = document.getElementById("play-paper");
paperButton.addEventListener("click", paperClicked);

function scissorsClicked() {
	playGame(3);
}
const scissorsButton = document.getElementById("play-scissors");
scissorsButton.addEventListener("click", scissorsClicked);
