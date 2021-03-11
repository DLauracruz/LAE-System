import { GoalsTable } from "./GoalsTable";
import { RecentTable } from "./RecentTable";
import { RemindersTable } from "./RemindersTable";
import { Service } from "./Service";

export const HomePage = () => {
  return (
    <div className="animate__animated animate__fadeIn home">
      <Service />
      <RecentTable />
      <GoalsTable />
      <RemindersTable />
    </div>
  );
};
