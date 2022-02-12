// adding event to the deposit and withdraw button
function getAmount(idOfinput, idOfCurrentAmount) {
    const enteredText = document.getElementById(idOfinput).value;
    const enteredValue = parseFloat(enteredText);
    const currentAmountText = document.getElementById(idOfCurrentAmount).innerText;
    const currentAmountValue = parseFloat(currentAmountText);
    const newBalnce = enteredValue + currentAmountValue;
    return newBalnce;
}
function updateBalance(newAmount) {
    const currentBalanceAmountText = document.getElementById('current-balance-amount').innerText;
    const currentBalanceAmountValue = parseFloat(currentBalanceAmountText);
    const updatedBalanceVAlue = currentBalanceAmountValue + newAmount;
    return updatedBalanceVAlue;
}
// working with deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    let newDepositAmount = getAmount('deposit-input', 'current-deposit-amount');
    // console.log(newDepostiAmount);
    document.getElementById('current-deposit-amount').innerText = newDepositAmount;
    document.getElementById('deposit-input').value = "";
    // updating balnce section with function
    document.getElementById('current-balance-amount').innerText = updateBalance(newDepositAmount);


})


// working with withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    let newWithdrawAmount = getAmount('withdraw-input', 'current-withdraw-amount');
    document.getElementById('current-withdraw-amount').innerText = newWithdrawAmount;
    document.getElementById('withdraw-input').value = "";
    // updating balnce section with function
    document.getElementById('current-balance-amount').innerText = updateBalance(-newWithdrawAmount);



})


// now handling the events with function


