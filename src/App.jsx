import { OverviewCard } from "./components/OverviewCard";
import { Sidebar } from "./components/Sidebar";
import { TopNavBar } from "./components/TopNavBar";

function App() {
  return (
    <>
      <div className="flex gap-20">
        <Sidebar />
        <div>
          <TopNavBar />
          <OverviewCard />
        </div>
      </div>
    </>
  );
}

export default App;
