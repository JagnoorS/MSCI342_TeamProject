// App.js
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
function App() {
  return (
    <div>
      <LineChart />
      <BarChart />
      <PieChart />
    </div>
  );
}
export default App;