/**
 *@author Quinn Logee
 *@version 0.01
 * @summary rolls an input type of dice an input number of time
 * @todo nothing
 */

"use strict";
const PROMPT = require(`readline-sync`);
let balance, minus, add, donate;

document.getElementById(`withdraw`).addEventListener("click", function withdraw() {

    minus = Number(PROMPT.question(`How much do you want to withdraw?  `));

    balance -= minus;

    console.log(`Your new balance is ${balance}`);
});

document.getElementById(`b&s, acct`).addEventListener("click", function balance() {

    console.log(`${balance}`)
});

document.getElementById(`transfer`).addEventListener("click", function transfer(){

    Number(PROMPT.question(`Enter the account number you would like to transfer from/to  `));
    
    Number(PROMPT.question(`How much would like to transfer  `));
});

document.getElementById(`deposit`).addEventListener("click", function deposit()  {

    add = Number(PROMPT.question(`How much would you like to deposit?  `));

    balance += add;

    console.log(`Your new balance is ${balance}`)
});

document.getElementById(`donate`).addEventListener("click", function deposit()  {

    donate = Number(PROMPT.question(`How much would you like to donate?  `));

    PROMPT.question(`where would you like to donate?  `);

    balance -= donate;

    console.log(`Your new balance is ${balance}`)
});

document.getElementById(`depcash, return`).addEventListener("click", function deposit()  {

    console.log(`You must go to your local bank to do this.`)
});

document.getElementById(`deposit`).addEventListener("click", function deposit()  {

    add = PROMPT.question(`How much would you like to deposit?  `);

    balance += add;

    console.log(`Your new balance is ${balance}`)
});
