// homework

// let userNumber = prompt("hi! do you want to play? write me a number, baby :)");
// if (userNumber) {
//   alert(userNumber ** 2 + ", cool, yes?");
// } else {
//   alert("okay, baby, we can try next time :)");
// }

// // Завдання 2
// let visitorName = prompt(`hi, gorgeous, i need your name`);
// let visitorAmount = prompt(
//   `how many money do you want to put on your deposit?`
// );
// let visitorAmountDate = prompt(
//   `wooow! you are rich! how long must i keep it (months)?`
// );
// let x = 20 / 12;
// console.log(x);

// let visitorEarnPercent = x * visitorAmountDate;
// let visitorEarn = (visitorAmount / 100) * visitorEarnPercent;
// console.log(visitorEarn);
// alert(
//   `dear ${visitorName}, you have put ${visitorAmount}uah to your deposit, 20% to year, for ${visitorAmountDate} months. You will earn ${visitorEarn}uah. You will be more rich!`
// );

// // Завдання 3
// let userA = prompt("let's play again! write me a number");
// let userB = prompt("nice! write me second number");

// let userPlus = +userA + +userB;
// let userMinus = +userA - +userB;
// let userPart = +userA / +userB;
// let userMore = +userA * +userB;
// alert(
//   `just look! these are your numbers! ${userA} + ${userB} = ${userPlus}; ${userA} - ${userB} = ${userMinus}; ${userA} / ${userB} =  ${userPart}; ${userA} * ${userB} =  ${userMore}`
// );

// let name = confirm("yor name is Pamela Anderson?");
// if (name) {
//   alert("I love you, Pam!");
// } else {
//   let userName = prompt("Who are you? write me your name!");
//   if (userName) {
//     alert(`nice to meet you, ${username}!`);
//   } else {
//     alert("Chao-cacao!");
//   }
// }

// task 1
let usersAge = prompt("hi! write me your age");
if (usersAge > 18 && usersAge <= 45) {
  alert("super! welcome to our team!");
} else {
  alert("sorry, our team is full now");
}

// task 2
let a = 10;
let b = 5;

if (a > 3 && a < 12 && b >= 5 && b < 13) {
  console.log("true");
} else {
  console.log("false");
}

// // task 3
// let user_name = prompt("What is your name, my dear rich user?");
// let user_amount = prompt(
//   `hi, ${user_name}! how many money do you want to put?`
// );
// let user_months = prompt(
//   `wow! okay! how long do you want to keep it? ${user_name}, write me how many months`
// );
// let percent;

// if (user_months < 6) {
//   percent = 15 / 12;
// } else if (user_months > 6 && user_months < 9) {
//   percent = 16 / 12;
// } else if (user_months > 9) {
//   percent = 17 / 12;
// }

// let user_earn_percent = percent * user_months;
// console.log(user_earn_percent);
// let user_earn = (user_amount / 100) * user_earn_percent;

// alert(
//   `honey ${user_name}, you put on your deposit ${user_amount}, 20% per year,on ${user_months}. during this period you eran ${user_earn}`
// );

// task 3
let user_name = prompt("What is your name, my dear rich user?");
let user_amount = prompt(
  `hi, ${user_name}! how many money do you want to put?`
);
let user_months = prompt(
  `wow! okay! how long do you want to keep it? ${user_name}, write me how many months`
);
let percent = 16;

if (user_months < 6) {
  --percent;
} else if (user_months >= 6 && user_months <= 9) {
  percent;
} else if (user_months > 9) {
  ++percent;
}
let percent_deposit = percent / 12;
let user_earn_percent = percent_deposit * user_months;
console.log(user_earn_percent);
let user_earn = (user_amount / 100) * user_earn_percent;

if (user_months < 6) {
  alert(
    `dear ${user_name}, you put on your deposit ${user_amount}uah, 15% per year, for ${user_months} months. during this period you will earn ${user_earn}uah`
  );
} else if (user_months >= 6 && user_months <= 9) {
  alert(
    `dear ${user_name}, you put on your deposit ${user_amount}uah, 16% per year, for ${user_months} months. during this period you will earn ${user_earn}uah`
  );
} else if (user_months > 9) {
  alert(
    `dear ${user_name}, you put on your deposit ${user_amount}uah, 17% per year, for ${user_months} months. during this period you will earn ${user_earn}uah`
  );
}
