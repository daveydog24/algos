let buttons = [
    `<button class="btn" id="btn1">1</button>`,
    `<button class="btn" id="btn2">2</button>`,
    `<button class="btn" id="btn3">3</button>`,
    `<button class="btn" id="btn4">4</button>`,
    `<button class="btn" onclick="middle()" id="btn5">5</button>`,
    `<button class="btn" id="btn6">6</button>`,
    `<button class="btn" id="btn7">7</button>`,
    `<button class="btn" id="btn8">8</button>`,
    `<button class="btn" id="btn8">9</button>`,
]
function middle() {   
    let square = document.getElementById('btns');
    let temp = buttons[0];
    buttons[0] = buttons[3];
    buttons[3] = buttons[6];
    buttons[6] = buttons[7];
    buttons[7] = buttons[8];
    buttons[8] = buttons[5];
    buttons[5] = buttons[2];
    buttons[2] = buttons[1];
    buttons[1] = temp;
    square.innerHTML = buttons;
}
