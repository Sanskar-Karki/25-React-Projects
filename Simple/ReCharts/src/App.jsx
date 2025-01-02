import AreaChartComponent from "./components/AreaChart";
import BarChartComponent from "./components/BarChar";
import LineCharComponent from "./components/Linechart";

const GridItem = ({ children }) => {
  return (
    <div className="p-5 border border-slate-700 rounded-lg bg-slate-800">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen flex justify-center items-center">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px] p-10">
        <GridItem>
          <AreaChartComponent />
        </GridItem>
        <GridItem>
          <BarChartComponent />
        </GridItem>
        <GridItem>
          <LineCharComponent />
        </GridItem>
      </div>
    </div>
  );
};

export default App;
