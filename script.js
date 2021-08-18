function increaeCaseAmount(inputId, isplus, amount) {
    const numberShowBtn = document.getElementById(inputId);
    let showNumber = numberShowBtn.value;
    if (isplus == true) {
        showNumber = parseInt(showNumber) + 1;
        numberShowBtn.value = showNumber;
    }
    else if (showNumber > 0) {
        showNumber = parseInt(showNumber) - 1;
        numberShowBtn.value = showNumber;
    }
    const total = document.getElementById(amount);
    total.innerText = showNumber * 59;
    calculate();
}

function increaephoneAmount(inputId, isplus, amount) {
    const numberShowBtn = document.getElementById(inputId);
    let showNumber = numberShowBtn.value;
    if (isplus == true) {
        showNumber = parseInt(showNumber) + 1;
        numberShowBtn.value = showNumber;
    }
    else if (showNumber > 0) {
        showNumber = parseInt(showNumber) - 1;
        numberShowBtn.value = showNumber;
    }
    const total = document.getElementById(amount);
    total.innerText = showNumber * 1219;
    calculate();
}
function getInput(inputId) {
    const input = document.getElementById(inputId);
    const totalInput = parseInt(input.value);
    return totalInput;
}

function calculate() {
    const totalPhoneAmount = getInput('phone-number-btn') * 1219;
    const totalCaseAmount = getInput('case-number-btn') * 59;
    const subtotal = totalPhoneAmount + totalCaseAmount;
    const taxTotal = parseFloat((subtotal * 0.01)).toFixed(1);
    const totalAmount = parseFloat(subtotal) + parseFloat(taxTotal);

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = taxTotal;
    document.getElementById('total').innerText = totalAmount;
    // const tax = document.getElementById('tax');
    // tax.innerText = (subtotal * 0.01).toFixed(3);
    // const totalText = document.getElementById('total');
    // totalText.innerText = subtotal + tax;

}

document.getElementById('case-btn-plus').addEventListener('click', function () {
    increaeCaseAmount('case-number-btn', true, 'case-total-amount');

})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    increaeCaseAmount('case-number-btn', false, 'case-total-amount');

})

document.getElementById('phone-btn-plus').addEventListener('click', function () {
    const phoneIncrease = increaephoneAmount('phone-number-btn', true, 'phone-total-amount')
})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    const caseIncrease = increaephoneAmount('phone-number-btn', false, 'phone-total-amount');

})