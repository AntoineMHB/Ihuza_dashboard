import { OverviewCard } from "./OverviewCard";
import { RecentActivityCard } from "./RecentActivityCard";
import { RecentAddedProdCard } from "./RecentAddedProdCard";
import { StatsRow } from "./StatsRow";
import { UsersCard } from "./UsersCard";
import { UsersTable } from "./UsersTable";

export const MainContent = () => {
  return (
    <div className="bg-gray-50 px-5 py-5">
      <OverviewCard />
      <StatsRow />
      <RecentAddedProdCard />
      <UsersCard />
      <UsersTable />
      <RecentActivityCard />
    </div>
  );
};
