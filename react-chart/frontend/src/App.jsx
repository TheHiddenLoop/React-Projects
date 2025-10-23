import { BarChart } from "./Cart/BarChart";
import { LineChart } from "./Cart/LineChart";
import { PieChart } from "./Cart/PieChart";

export default function App() {
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen bg-gray-100">
      <div className="w-[450px] h-[350px] bg-white shadow-lg rounded-2xl p-2">
        <PieChart />
      </div>
      <div className="w-[450px] h-[350px] bg-white shadow-lg rounded-2xl p-2">
        <BarChart />
      </div>
      <div className="w-[450px] h-[350px] bg-white shadow-lg rounded-2xl p-2">
        <LineChart />
      </div>
    </div>
  );
}
