import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputID = useId()

    return (
        <div className={`bg-white/80 p-4 rounded-xl text-base flex gap-3 shadow-inner border border-gray-200 ${className}`}>
            <div className="w-1/2 flex flex-col justify-center">
                <label htmlFor={amountInputID} className="text-gray-600 mb-2 font-medium">{label}</label>
                <input
                    id={amountInputID}
                    className="outline-none w-full bg-gray-50 py-2 px-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:bg-white text-gray-800 font-semibold transition-all shadow"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-end text-right">
                <label className="text-gray-600 mb-2 font-medium">Currency</label>
                <select
                    className="rounded-lg px-3 py-2 bg-gray-50 border border-blue-200 focus:border-blue-500 outline-none text-gray-800 font-semibold cursor-pointer shadow"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
