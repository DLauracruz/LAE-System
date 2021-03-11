import { Switch, Route, Redirect } from "react-router-dom";

// Components
import { Uw } from "../pages/uw/UwPage";
import { HomePage } from "../pages/home/HomePage";
import { UwDashboard } from "../pages/uw-dashboard/UwDashboard";
import { CeoDashboard } from "../pages/ceo-dashboard/CeoDashboard";
import { ManagerDashboard } from "../pages/manager-dashboard/ManagerDashboard";
import { TestingIT } from "../pages/testing-it/TestingIT";

export const AppRouter = () => {
  return (
    <div className="app-router">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/uw" exact component={Uw} />
        <Route path="/uw-dashboard" exact component={UwDashboard} />
        <Route path="/ceo-dashboard" exact component={CeoDashboard} />
        <Route path="/manager-dashboard" exact component={ManagerDashboard} />
        <Route path="/testing-it" exact component={TestingIT} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};
