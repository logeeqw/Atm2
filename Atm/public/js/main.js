/**
 *@author Quinn Logee
 *@version 0.01
 * @summary rolls an input type of dice an input number of time
 * @todo nothing
 */

"use strict";
const PROMPT = require(`readline-sync`);
let balance, minus;

document.getElementById(`withdraw`).addEventListener("click", function withdraw() {

    minus = Number(PROMPT.question(`How much do you want to withdraw?  `));

    balance -+ minus;

    console.log(`Your new balance is ${balance}`);
});

document.getElementById(`b&s`).addEventListener("click", function balance() {

    console.log(`${balance}`)
});

document.getElementById(`transfer`).addEventListener("click", function transfer(){

    PROMPT.question(`Enter the other account number you would like to transfer from/to  `);
    
    PROMPT.question(`How much would like to transfer  `)
});