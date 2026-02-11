const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

// Actualiza todo a partir de valores RGB
function updateAll(r, g, b) {
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);

    // Sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    // Inputs numéricos
    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = `RGB: ${rgb}`;

    const hex =
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexText.textContent = `HEX: ${hex.toUpperCase()}`;
    colorPicker.value = hex;
}

// Desde sliders
function fromRange() {
    updateAll(
        Number(red.value),
        Number(green.value),
        Number(blue.value)
    );
}

// Desde inputs numéricos
function fromNumber() {
    updateAll(
        Number(redNum.value),
        Number(greenNum.value),
        Number(blueNum.value)
    );
}

// Desde color picker
function fromPicker() {
    const hex = colorPicker.value;

    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);

    updateAll(r, g, b);
}

// Validación 0–255
function clamp(value) {
    if (value < 0) return 0;
    if (value > 255) return 255;
    return value;
}

// Eventos
red.addEventListener("input", fromRange);
green.addEventListener("input", fromRange);
blue.addEventListener("input", fromRange);

redNum.addEventListener("input", fromNumber);
greenNum.addEventListener("input", fromNumber);
blueNum.addEventListener("input", fromNumber);

colorPicker.addEventListener("input", fromPicker);
