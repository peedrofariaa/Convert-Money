const button = document.querySelector('button')
const select = document.querySelector('.select-result')

const buttonValue = async () => {
    const input = document.querySelector('input').value
    const valueReal = document.querySelector('.p-real')
    const valueFinal = document.querySelector('.p-number')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    
    const dollar = data.USDBRL.bid
    const euro = data.EURBRL.bid
    const bitcoin = data.BTCBRL.bid
    console.log(data)

    valueReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(input)

    if (select.value === 'US$ Dólar americano') {
        valueFinal.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(input / dollar)
    }

    if (select.value === '€ Euro') {
        valueFinal.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(input / euro)
    }

    if (select.value === '₿ Bitcoin') {
        valueFinal.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(input / bitcoin)
    }
}

changeMoney = () => {
    const moneyName = document.getElementById('p-text')
    const moneyFlag = document.getElementById('flag-img')

    if (select.value === '€ Euro') {
        moneyName.innerHTML = 'Euro'
        moneyFlag.src = "imagens/Euro.svg"
    }

    if (select.value === 'US$ Dólar americano') {
        moneyName.innerHTML = 'Dólar Americano'
        moneyFlag.src = "imagens/estados-unidos (1) 1.svg"
    }

    if (select.value === '₿ Bitcoin') {
        moneyName.innerHTML = 'Bitcoin'
        moneyFlag.src = "imagens/Bitcoin.png"
    }
    buttonValue()
}

button.addEventListener('click', buttonValue)
select.addEventListener('change', changeMoney)