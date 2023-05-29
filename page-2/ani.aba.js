// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  // let diffInMs = (diffInSec - ss) * 100;
  // let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  // let formattedMS = ms.toString().padStart(0, "0");

  return `${formattedMM}:${formattedSS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners


let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);



function countText_1() {
  let text = document.form_main_1.text.value;
  document.getElementById('characters_1').innerText = text.length; 
}
function countText_2() {
  let text = document.form_main_2.text.value;
  document.getElementById('characters_2').innerText = text.length;
}
function countText_3() {
  let text = document.form_main_3.text.value;
  document.getElementById('characters_3').innerText = text.length;
}
function countText_4() {
  let text = document.form_main_4.text.value;
  document.getElementById('characters_4').innerText = text.length;
}
function countText_5() {
  let text = document.form_main_5.text.value;
  document.getElementById('characters_5').innerText = text.length;
}
function countText_6() {
  let text = document.form_main_6.text.value;
  document.getElementById('characters_6').innerText = text.length;
}
function countText_7() {
  let text = document.form_main_7.text.value;
  document.getElementById('characters_7').innerText = text.length;
}
function countText_8() {
  let text = document.form_main_8.text.value;
  document.getElementById('characters_8').innerText = text.length;
}
function countText_9() {
  let text = document.form_main_9.text.value;
  document.getElementById('characters_9').innerText = text.length;
}
function countText_10() {
  let text = document.form_main_10.text.value;
  document.getElementById('characters_10').innerText = text.length;
}
function countText_11() {
  let text = document.form_main_11.text.value;
  document.getElementById('characters_11').innerText = text.length;
}
function countText_1a() {
  let text = document.form_main_1a.text.value;
  document.getElementById('characters_1a').innerText = text.length; 
}
function countText_2a() {
  let text = document.form_main_2a.text.value;
  document.getElementById('characters_2a').innerText = text.length;
}
function countText_3a() {
  let text = document.form_main_3a.text.value;
  document.getElementById('characters_3a').innerText = text.length;
}
function countText_4a() {
  let text = document.form_main_4a.text.value;
  document.getElementById('characters_4a').innerText = text.length;
}
function countText_5a() {
  let text = document.form_main_5a.text.value;
  document.getElementById('characters_5a').innerText = text.length;
}
function countText_6a() {
  let text = document.form_main_6a.text.value;
  document.getElementById('characters_6a').innerText = text.length;
}
function countText_7a() {
  let text = document.form_main_7a.text.value;
  document.getElementById('characters_7a').innerText = text.length;
}
function countText_8a() {
  let text = document.form_main_8a.text.value;
  document.getElementById('characters_8a').innerText = text.length;
}
function countText_9a() {
  let text = document.form_main_9a.text.value;
  document.getElementById('characters_9a').innerText = text.length;
}
function countText_10a() {
  let text = document.form_main_10a.text.value;
  document.getElementById('characters_10a').innerText = text.length;
}
function countText_11a() {
  let text = document.form_main_11a.text.value;
  document.getElementById('characters_11a').innerText = text.length;
}



if(document.fullscreenEnabled || document.webkitFullscreenEnabled) {
	const toggleBtn = document.querySelector('.js-toggle-fullscreen-btn');

	const styleEl = document.createElement('link');
	styleEl.setAttribute('rel', 'stylesheet');
	styleEl.setAttribute('href', 'https://codepen.io/tiggr/pen/poJoLyW.css');
	styleEl.addEventListener('load', function() {
		toggleBtn.hidden = false;
	});
	document.head.appendChild(styleEl);
	
	toggleBtn.addEventListener('click', function() {
		if(document.fullscreen) {
			document.exitFullscreen();
		} else if(document.webkitFullscreenElement) {
			document.webkitCancelFullScreen()
		} else if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else {
			document.documentElement.webkitRequestFullScreen();
		}
	});
	
	document.addEventListener('fullscreenchange', handleFullscreen);
	document.addEventListener('webkitfullscreenchange', handleFullscreen);
	
	
	function handleFullscreen() {
		if(document.fullscreen || document.webkitFullscreenElement) {
			toggleBtn.classList.add('on');
			toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
		} else {
			toggleBtn.classList.remove('on');
			toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
		}
	}
}

// function ania(size){
//   document.getElementById("ani").style.height=size;
//   }

// function anuki(size){
//   document.getElementById("ani").style.width=size;
//   }

// function loki(){
//   document.getElementById("pol").style=display('1s');
//   }

// function place(delay){
//   document.getElementById("pol").style.animationDelay=delay;
//   }



// const box = document.querySelector(".box")
// const button = document.querySelector(".bn")

// button.addEventListener("click", () => {
//   box.classList.toggle("toggle")
// })