import CurrencyManager from "../shared/currencyManagert.mjs"


const update = (value) => {
   console.log(value)
}

const inputMonitor = (value)=> update(CurrencyManager.format(value))

const input = process.openStdin() // modulo interno do node.js quando vc digita um valor de entrada
console.log(input)
input.addListener("data", inputMonitor)





