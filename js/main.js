// Tip Calculator

/*
const bill = document.getElementById('bill');
const numOfPeople = document.getElementById('people-amount');
const result = document.getElementById('result');
const calculator = document.getElementById('calculate');
let serviceQual = document.getElementById('service-qual');
const tip = document.getElementById('tip');
const totalBillTip = document.getElementById('total-bill-tip');
const dividedTip = document.getElementById('div-tip');
const dividedTipPerson = document.getElementById('div-tip-person');

result.style.display = 'none';
calculator.addEventListener('click', calculateTip);

// Calculate Tip
function calculateTip() {
    if (bill.value === '' || serviceQual.value === 0) {
        alert('Please enter a value');
        return;
    }
    if (numOfPeople.value === '' || numOfPeople.value <= 1) {
        numOfPeople.value = 1;
        result.style.display = 'none';
    } else {
        result.style.display = 'block';
    }

    let billVal = Number(bill.value);
    let numOfPeopleVal = Number(numOfPeople.value);
    let serviceQualVal = Number(serviceQual.value);

    let totalTip = billVal * serviceQualVal;
    let divTip = totalTip / numOfPeopleVal;
    let totalBill = totalTip + billVal;
    let divBillTip = totalBill / numOfPeopleVal;

    result.style.display = 'block';

    tip.innerHTML = `$${totalTip.toFixed(2)}`;
    totalBillTip.innerHTML = `$${totalBill.toFixed(2)}`;
    dividedTip.innerHTML = `$${divTip.toFixed(2)}`;
    dividedTipPerson.innerHTML = `$${divBillTip.toFixed(2)}`;
}
*/


// Tip Calculator
(function () {
    let tipCalculator = {
        bill: document.getElementById('bill'),
        numOfPeople: document.getElementById('people-amount'),
        result: document.getElementById('result'),
        calculator: document.getElementById('calculate'),
        serviceQual: document.getElementById('service-qual'),
        tip: document.getElementById('tip'),
        totalBillTip: document.getElementById('total-bill-tip'),
        dividedTip: document.getElementById('div-tip'),
        dividedTipPerson: document.getElementById('div-tip-person'),
        init: () => {
            tipCalculator.result.style.display = 'none';
            tipCalculator.calculator.addEventListener('click', tipCalculator.calculateTip);
        },
        calculateTip: () => {
            if (tipCalculator.bill.value === '' || tipCalculator.serviceQual.value === 0) {
                alert('Please enter a value');
                return;
            }
            if (tipCalculator.numOfPeople.value === '' || tipCalculator.numOfPeople.value <= 1) {
                tipCalculator.numOfPeople.value = 1;
                tipCalculator.result.style.display = 'none';
            } else {
                tipCalculator.result.style.display = 'block';
            }

            let billVal = Number(tipCalculator.bill.value);
            let numOfPeopleVal = Number(tipCalculator.numOfPeople.value);
            let serviceQualVal = Number(tipCalculator.serviceQual.value);

            let totalTip = billVal * serviceQualVal;
            let divTip = totalTip / numOfPeopleVal;
            let totalBill = totalTip + billVal;
            let divBillTip = totalBill / numOfPeopleVal;

            tipCalculator.result.style.display = 'block';

            tipCalculator.tip.innerHTML = `$${totalTip.toFixed(2)}`;
            tipCalculator.totalBillTip.innerHTML = `$${totalBill.toFixed(2)}`;
            tipCalculator.dividedTip.innerHTML = `$${divTip.toFixed(2)}`;
            tipCalculator.dividedTipPerson.innerHTML = `$${divBillTip.toFixed(2)}`;
        }
    };
    tipCalculator.init();
})()