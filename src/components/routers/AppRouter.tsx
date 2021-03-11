import { Switch, Route, Redirect } from "react-router-dom";

// Components
import { HomePage } from "../pages/home/HomePage";
import { UwDashboard } from "../pages/uw-dashboard/UwDashboard";
import { Uw } from "../pages/uw/UwPage";

export const AppRouter = () => {
  return (
    <div className="app-router">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/uw" exact component={Uw} />
        <Route path="/uw-dashboard" exact component={UwDashboard} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};
