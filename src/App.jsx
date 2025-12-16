import { Sidebar } from "./components/Sidebar";
import { TopNavBar } from "./components/TopNavBar";

function App() {
  return (
    <>
      <div className="flex gap-20">
        <Sidebar />
        <TopNavBar />
      </div>
    </>
  );
}

export default App;
