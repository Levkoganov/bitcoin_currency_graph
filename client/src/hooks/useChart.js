// Dependencies
import { useState, useEffect } from "react";

function useChart({ toggleCoin, bitcoinData }) {
  // Hooks
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    // Set key value base on "toggleCoin" value (boolean)
    const currentData = {
      open: toggleCoin
        ? bitcoinData["1a. open (ILS)"]
        : bitcoinData["1b. open (USD)"],
      high: toggleCoin
        ? bitcoinData["2a. high (ILS)"]
        : bitcoinData["2b. high (USD)"],
      low: toggleCoin
        ? bitcoinData["3a. low (ILS)"]
        : bitcoinData["3b. low (USD)"],
      close: toggleCoin
        ? bitcoinData["4a. close (ILS)"]
        : bitcoinData["4b. close (USD)"],
    };

    setChartData({
      labels: ["open", "high", "low", "close"],
      datasets: [{ label: "currency", data: currentData }],
    });
    
  }, [toggleCoin, bitcoinData]);

  return { chartData }
}

export default useChart