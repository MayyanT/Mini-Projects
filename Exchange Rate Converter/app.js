const currencyEl_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');

function convert(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {

        const rate = data.rates[currency_two];

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amount_two.value = (amount_one.value * rate).toFixed(2);
    });

}

currencyEl_one.addEventListener('change', convert);
currencyEl_two.addEventListener('change', convert);
amount_one.addEventListener('input', convert);
amount_two.addEventListener('input', convert);

swap.addEventListener('click', () => {
    const temporary = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temporary;

    convert();
});

convert();