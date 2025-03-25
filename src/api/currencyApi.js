document.addEventListener('DOMContentLoaded', () => {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const convertButton = document.getElementById('convertBtn');
    const resultContainer = document.getElementById('result');

    const apiKey = '221db3618341990f8a5829cf';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    async function loadCurrencies() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.result === 'success') {
                const currencies = Object.keys(data.conversion_rates);

                currencies.forEach(currency => {
                    const option1 = document.createElement('option');
                    const option2 = document.createElement('option');

                    option1.value = option2.value = currency;
                    option1.textContent = option2.textContent = currency;

                    fromCurrency.appendChild(option1);
                    toCurrency.appendChild(option2);
                });

                fromCurrency.value = 'USD';
                toCurrency.value = 'EUR';
            } else {
                alert('Error loading currencies');
            }
        } catch (error) {
            console.error('Error fetching currencies:', error);
            alert('Failed to load currencies. Please try again.');
        }
    }
    async function convertCurrency() {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amount = parseFloat(amountInput.value);

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
            const data = await response.json();

            if (data.result === 'success') {
                const rate = data.conversion_rates[to];
                const convertedAmount = (amount * rate).toFixed(2);

                resultContainer.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
            } else {
                alert('Error during conversion.');
            }
        } catch (error) {
            console.error('Error converting currency:', error);
            alert('Conversion failed. Please try again.');
        }
    }

    convertButton.addEventListener('click', convertCurrency);
    loadCurrencies();
});