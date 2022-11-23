import Calculate from './Calculate.js'

function EventController() {
    this.calculate = new Calculate();
    this.number1 = document.querySelector("#number1");
    this.number2 = document.querySelector("#number2");
    this.resultBox = document.querySelector("#result-box");
    this.btnPlus = document.querySelector("#btn-plus");
    this.btnTimes = document.querySelector("#btn-times");
    this.btnClear = document.querySelector("#btn-clear");

    this.number1.addEventListener("keyup", handleNumberKeyup);
    this.number1.addEventListener("change", handleNumberChange);
    this.number2.addEventListener("keyup", handleNumberKeyup);
    this.number2.addEventListener("change", handleNumberChange);
    this.btnPlus.addEventListener("click", handleBtnPlusClick);
    this.btnTimes.addEventListener("click", handleBtnTimesClick);
    this.btnClear.addEventListener("click", handleBtnClearClick);
    
}

const eventController = new EventController();

export function init() {
    eventController.number1.value = "";
    eventController.number2.value = "";
    eventController.resultBox.innerHTML = 0;
}

function handleBtnTimesClick(event) {
    event.preventDefault();
    setResultBox(eventController.calculate.times);
}

function handleNumberKeyup(event) {
    event.target.value = event.target.value.replace(/[^0-9.]/g, "");
}

function handleNumberChange(event) {
    if (!event.target.value) {
        event.target.classList.add("input-error");
    } else if (event.target.classList.contains("input-error")) {
        event.target.classList.remove("input-error");
    }
}

function handleBtnPlusClick(event) {
    event.preventDefault();
    setResultBox(eventController.calculate.plus);
}

function handleBtnClearClick(event) {
    event.preventDefault();
    init();
    const elements = document.querySelectorAll(".input-error");
    elements.forEach(e => e.classList.remove("input-error"));
}

function setResultBox(func) {
    if (document.querySelectorAll(".input-error").length > 0)
    eventController.resultBox.innerHTML = "Erro!!!";
    else
    eventController.resultBox.innerHTML = func(Number(parseFloat(eventController.number1.value)), Number(parseFloat(eventController.number2.value)));
}
