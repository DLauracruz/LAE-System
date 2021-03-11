import { ErrorTable } from "./ErrorTable";
import { PolicyTable } from "./PolicyTable";
import { TagTable } from "./TagTable";

export const Uw = () => {
  return (
    <div className="uw animate__animated animate__fadeIn">
      <PolicyTable />
      <ErrorTable />
      <TagTable />
    </div>
  );
};
