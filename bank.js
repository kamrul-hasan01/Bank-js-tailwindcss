function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const AmountText = inputFeild.value;
    const amountValue = parseFloat(AmountText);
    inputFeild.value = '';
    return amountValue;

}

function updateTotalFeild(totalFeildId, amount) {
    const totalElement = document.getElementById(totalFeildId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + amount;
}

function updatebalance(Amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + Amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - Amount;
    }
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalFeild('deposit-total', depositAmount);
        updatebalance(depositAmount, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= CurrentBalance) {
        updateTotalFeild('withdraw-total', withdrawAmount);
        updatebalance(withdrawAmount, false);
    }
})

