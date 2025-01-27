let bpm = 120;
let intervalId;
let isRunning = false;

function updateBPMValue() {
    const bpmRange = document.getElementById('bpmRange');
    const bpmValue = document.getElementById('bpmValue');
    bpm = bpmRange.value;
    bpmValue.textContent = bpm;
}

function startStopMetronome() {
    const startStopBtn = document.getElementById('startStopBtn');
    if (isRunning) {
        clearInterval(intervalId);
        startStopBtn.textContent = 'Start';
    } else {
        intervalId = setInterval(playBeat, (60 / bpm) * 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function playBeat() {
    const audio = new Audio('click.mp3');
    audio.play();
}
