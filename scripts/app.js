// Connect Wallet Functionality
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert(`Wallet connected: ${accounts[0]}`);
        } catch (error) {
            console.error('Error connecting wallet:', error);
            alert('Failed to connect wallet.');
        }
    } else {
        alert('MetaMask is not installed. Please install it to use this feature.');
    }
}

// Fetch Currencies from API
async function fetchCurrencies() {
    const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD'; // Example API
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const currencyDropdown = document.getElementById('currency-dropdown');

        // Populate dropdown with currencies
        for (const [currency] of Object.entries(data.rates)) {
            const option = document.createElement('option');
            option.value = currency;
            option.textContent = currency;
            currencyDropdown.appendChild(option);
        }
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }
}

// Swap Currencies
function swapCurrencies() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Simple swap logic (you can add conversion calculation here)
    document.getElementById('from-currency').value = toCurrency;
    document.getElementById('to-currency').value = fromCurrency;
}

// Language Switching
function switchLanguage() {
    const selectedLanguage = document.getElementById('language-dropdown').value;
    alert(`Language switched to: ${selectedLanguage}`);
    // Implement actual language switching logic here
}

// Event Listeners
document.getElementById('connect-wallet').addEventListener('click', connectWallet);
document.getElementById('swap-button').addEventListener('click', swapCurrencies);
document.getElementById('language-dropdown').addEventListener('change', switchLanguage);

// Initialize Currencies on Page Load
document.addEventListener('DOMContentLoaded', fetchCurrencies);

