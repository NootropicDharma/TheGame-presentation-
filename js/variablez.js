const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");

let frames = 0;

let pyroChickens = [];

let babyChickens = [];

let flames = [];

let points = 0;

let babyPoints = 0;

let capturedChickens = []

let requestId;

const audio = new Audio()
audio.src = "../audio/369920__mrthenoronha__cartoon-game-theme-loop.wav"
audio.loop = true;

let HeroDefault = {
    lives: 3,
    caughtChickens: 0
}

