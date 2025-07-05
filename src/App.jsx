import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="min-h-screen w-full flex flex-wrap justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl p-8 bg-white/90 border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 drop-shadow">Currency Converter</h2>
          <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
            <div className="w-full mb-3">
              <InputBox label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)} />
            </div>
            <div className="relative w-full flex justify-center my-2">
              <button type="button" className="border-2 border-blue-500 rounded-full bg-blue-500 text-white px-4 py-1 shadow hover:bg-blue-600 transition-all" onClick={swap}>Swap</button>
            </div>
            <div className="w-full mt-3 mb-6">
              <InputBox label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => { setTo(currency) }} selectCurrency={to} amountDisable={true} />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition-all">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
