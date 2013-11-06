var running = false;
var won = false;
var seconds = 0;

function start() {
	if(!running) {
		running = true;
		setTimeout(timer, 1000);
	}
}

function stop() {
	running = false;
	clearTimeout();
	doLayout();
	seconds = 0;
	updateTimer();
}

function pause() {
	running = false;
	clearTimeout();
}

function timer() {
	if(running) {
		seconds++;

		updateTimer();
		
		setTimeout(timer, 1000);
	} else {
		clearTimeout();
	}
}

function formatTimer(seconds) {
	var minutes = Math.floor(seconds / 60);
	var seconds = seconds - minutes * 60;
	return leadingZero(minutes) + ":" + leadingZero(seconds);
}

function leadingZero(number) {
	number = '' + number;

	while(number.length < 2) {
		number = '0' + number;
	}
	
	return number;
}

function updateTimer() {
	var paragraph = document.createElement("p");
	paragraph.innerHTML = formatTimer(seconds);
	document.getElementById("timer").innerHTML = "";
	document.getElementById("timer").appendChild(paragraph);
}