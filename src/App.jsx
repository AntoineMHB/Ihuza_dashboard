import { MainContent } from "./components/MainContent";
import { OverviewCard } from "./components/OverviewCard";
import { Sidebar } from "./components/Sidebar";
import { StatsRow } from "./components/StatsRow";
import { TopNavBar } from "./components/TopNavBar";

function App() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div>
          <TopNavBar />
          <div className="bg-green-500 text-green-200">OK</div>
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
