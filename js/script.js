var time = 0;
var running = false;

function startPause() {
	if (running == false) {
		running = true;
		increment();
		document.getElementById('start').innerHTML = 'Pause';
		document.getElementById('start').style.backgroundColor = '#00ccff';				
	}
	else {
		running = false;
		document.getElementById('start').innerHTML = 'Resume';
		document.getElementById('start').style.backgroundColor = "#32cd32";		
	}
}

function reset() {
	running = false;
	time = 0;
	document.getElementById('start').innerHTML = 'Start';
	document.getElementById('timer').innerHTML = '00:00:00:00';
	document.getElementById('start').style.backgroundColor = "#32cd32";
}


function increment() {	 
	setTimeout (function() {
		if (running == false)
			return;
		
		time++;
		var hours = Math.floor(time/10/3600);
		var mins = Math.floor((time/10 - hours * 3600)/60);
		var secs = Math.floor(time/10 - hours*3600 - mins*60);
		var tenth = time%10;

		if (hours < 10)
			hours = '0' + hours;
		
		if (mins < 10) {
			mins = '0' + mins;
		}
		if (secs < 10) {
			secs = '0' + secs;
		}
		document.getElementById("timer").innerHTML = hours + ':' + mins + ':' + secs + ':' + tenth + '0';
		increment();
	},100)	
}

var elemStart = document.getElementById('start');
elemStart.addEventListener('click', startPause);

var elemReset = document.getElementById('reset');
elemReset.addEventListener('click', reset);


