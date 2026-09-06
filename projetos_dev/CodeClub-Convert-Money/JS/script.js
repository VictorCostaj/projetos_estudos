/* Primeiro vou pegar o meu botão e selecionar ele criando um "id" no meu HTML. Depois vou criar um evento de clique com uma constante e depois uma button Event*/

const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
/*2*/const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realTextValue = document.getElementById('real-text-value')
    const curencyValueText = document.getElementById('currency-value-text')

  /*3*/ realTextValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);
    if (select.value === "US$ Dólar americano") {
        curencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar);

    }
    if (select.value === "€ Euro") {

        curencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro);

    }




};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = '/assets/euro.png'
    }

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = '/assets/eua.png'
    }
    convertValues()
}

/* Evento*/

/*1*/ button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
