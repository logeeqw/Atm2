/**
 *@author Quinn Logee
 *@version 0.01
 * @summary rolls an input type of dice an input number of time
 * @todo nothing
 */

"use strict";
const PROMPT = require(`readline-sync`);

document.getElementById(`withdraw`).addEventListener("click", function withdraw() {

    PROMPT.question(`How much do you want to withdraw?  `);

    PROMPT.question(`What is your account number?  `);
});