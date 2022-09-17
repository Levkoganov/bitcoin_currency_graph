import "chart.js/auto";
import { Line } from "react-chartjs-2";
import useChart from "../hooks/useChart";

function Chart({ toggleCoin, bitcoinData }) {
  const { chartData } = useChart({ toggleCoin, bitcoinData });

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
