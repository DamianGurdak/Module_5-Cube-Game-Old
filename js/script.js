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
			/*} else if (playerMove == "nieznany ruch") {
			printMessage("nie znam takiego ruchu, spróbuj jeszcze raz!");*/
		} else if (argComputerMove == argPlayerMove) {
			printMessage("Mamy Remis! Zagraj ponowanie");
		}
	}

	function printMessage(msg) {
		let div = document.createElement("div");
		div.innerHTML = msg;
		document.getElementById("messages").appendChild(div);
	}

	function clearMessages() {
		document.getElementById("messages").innerHTML = "";
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log("Wylosowana liczba to: " + randomNumber);

	let computerMove = getMoveName(randomNumber);

	/*if (randomNumber == 1) {
		computerMove = "kamień";
	} else if (randomNumber == 2) {
		computerMove = "papier";
	} else if (randomNumber == 3) {
		computerMove = "nożyce";
	}*/

	printMessage("Mój ruch to: " + computerMove);

	//		nieaktywen z powudu funkci playGame			let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

	console.log("Gracz wpisał: " + playerInput);

	let playerMove = getMoveName(playerInput);

	/*if (playerInput == "1") {
		playerMove = "kamień";
	} else if (playerInput == "2") {
		playerMove = "papier";
	} else if (playerInput == "3") {
		playerMove = "nożyce";
	}*/

	printMessage("Twój ruch to: " + playerMove);

	/*if (
		(computerMove == "kamień" && playerMove == "papier") ||
		(computerMove == "papier" && playerMove == "nożyce") ||
		(computerMove == "nożyce" && playerMove == "kamień")
	) {
		printMessage("Ty wygrywasz!");
	} else if (
		(computerMove == "papier" && playerMove == "kamień") ||
		(computerMove == "nożyce" && playerMove == "papier") ||
		(computerMove == "kamień" && playerMove == "nożyce")
	) {
		printMessage("Wygrał komputer!");
		} else if (playerMove == "nieznany ruch") {			//powiela sie kom z getNameMove
		printMessage("nie znam takiego ruchu, spróbuj jeszcze raz!");
	} else if (computerMove == playerMove) {
		printMessage("Mamy Remis! Zagraj ponowanie");
	} */

	displayResult(computerMove, playerMove);
}
//playGame(3);			wywołanie funkcji playGame

function rockClicked() {
	playGame("Wybrałes Kamień");
}
let rockButton = document.getElementById("play-rock");
rockButton.addEventListener("click", rockClicked);

function paperClicked() {
	playGame("Wybrałes papier");
}
let paperButton = document.getElementById("play-paper");
paperButton.addEventListener("click", paperClicked);

function scissorsClicked() {
	playGame("Wybrałeś nozyczki");
}
let scissorsButton = document.getElementById("play-scissors");
scissorsButton.addEventListener("click", scissorsClicked);
