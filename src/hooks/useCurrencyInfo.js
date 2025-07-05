import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    // API is called as soon as the value of currency is changed
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;