#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 12121;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your PIN number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Access Granted");
    let operation = await inquirer.prompt([
        {
            name: "action",
            message: "please choose one option to further proceed!!!",
            type: "list",
            choices: ["withdraw", "balancecheck", "fastcash"]
        }
    ]);
    if (operation.action === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter the amount you want to withdraw",
                type: "number"
            }
        ]);
        if (amount.withdraw > myBalance) {
            console.log("you have insufficient balance in your account");
        }
        else if (myBalance -= amount.withdraw) {
            console.log(`your remaining amount in your account is ${myBalance}`);
        }
    }
    if (operation.action === "balancecheck") {
        console.log(`your current amount in your account is ${myBalance}`);
    }
    if (operation.action === "fastcash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "cash",
                message: "Enter your cash amount",
                type: "list",
                choices: ["100", "500", "1000", "5000", "100000", "15000", "20000", "25000"]
            }
        ]);
        if (cashAmount.cash > myBalance) {
            console.log("your balance is insufficient to process your transaction");
        }
        else if (myBalance -= cashAmount.cash) {
            console.log(`your remaining cash amount is ${myBalance}`);
        }
    }
}
else {
    console.log("Access Denied");
}
