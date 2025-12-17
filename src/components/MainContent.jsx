import { OverviewCard } from "./OverviewCard";
import { StatsRow } from "./StatsRow";

export const MainContent = () => {
  return (
    <div className="bg-gray-50 px-5 py-5">
      <OverviewCard />
      <StatsRow />
    </div>
  );
};
