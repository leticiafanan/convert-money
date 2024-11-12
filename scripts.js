const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConverted = document.querySelector(".currency-select-to-convert")


    function changeCurrency1() {
        const currencyNameToChange = document.getElementById("currency-name-to-change")
        const currencyImageToConvert = document.querySelector(".currency-img-to-convert")
    
        if(currencySelectToConverted.value == "dolar1") {
            currencyNameToChange.innerHTML = "Dólar americano"
            currencyImageToConvert.src = "./assets/usa.png"
        }
        if(currencySelectToConverted.value == "euro1") {
            currencyNameToChange.innerHTML = "Euro"
            currencyImageToConvert.src = "./assets/euro.png"
        }
        if(currencySelectToConverted.value == "libra1") {
            currencyNameToChange.innerHTML = "Libra"
            currencyImageToConvert.src = "./assets/libra 1.png"
        }
    
        if(currencySelectToConverted.value == "bitcoin1") {
            currencyNameToChange.innerHTML = "Bitcoin"
            currencyImageToConvert.src = "./assets/bitcoin 1.png"
        }
        
    
    }}

    currencySelectToConverted.addEventListener("change", changeCurrency() )


    toConvertValues()


    ///////// SEGUNDO SELECT
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.16
    const bitcoinToday = 149.148
    const realToday = 0.21

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ld-LD", {
            style: "currency",
            currency: "LRD"
        }).format(inputCurrencyValue / libraToday)
    }
    if(currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("bt-BT", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }
 
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/usa.png"
    }
    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }
   


    convertValues()
    
}

currencySelect.addEventListener("change",changeCurrency )


