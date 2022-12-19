// homework

let userNumber = prompt("hi! do you want to play? write me a number, baby :)");
if (userNumber) {
  alert(userNumber ** 2 + ", cool, yes?");
} else {
  alert("okay, baby, we can try next time :)");
}

// Завдання 2
let visitorName = prompt(`hi, gorgeous, i need your name`);
let visitorAmount = prompt(
  `how many money do you want to put on your deposit?`
);
let visitorAmountDate = prompt(
  `wooow! you are rich! how long must i keep it (months)?`
);
let x = 20 / 12;
console.log(x);

let visitorEarnPercent = x * visitorAmountDate;
let visitorEarn = (visitorAmount / 100) * visitorEarnPercent;
console.log(visitorEarn);
alert(
  `dear ${visitorName}, you have put ${visitorAmount}uah to your deposit, 20% to year, for ${visitorAmountDate} months. You will earn ${visitorEarn}uah. You will be more rich!`
);

// Завдання 3
let userA = prompt("let's play again! write me a number");
let userB = prompt("nice! write me second number");

let userPlus = +userA + +userB;
let userMinus = +userA - +userB;
let userPart = +userA / +userB;
let userMore = +userA * +userB;
alert(
  `just look! these are your numbers! ${userA} + ${userB} = ${userPlus}; ${userA} - ${userB} = ${userMinus}; ${userA} / ${userB} =  ${userPart}; ${userA} * ${userB} =  ${userMore}`
);
