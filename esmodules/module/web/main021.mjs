import CurrencyManager from "../shared/currencyManagert.mjs"

const update = (value) => {
    const output = document.querySelector("#output01")
    output.innerHTML = value
}


window.inputMonitor = (value)=> update(CurrencyManager.format(value))


//function inputteste(e){ 
      //const value = e.key
     // update(CurrencyManager.format(value))
//}
//const inputs = document.querySelector('#teste')
//inputs.addEventListener("keyup", inputteste)