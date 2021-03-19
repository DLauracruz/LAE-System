import { Navbar } from "./shared/Navbar";
import { AppRouter } from "./routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
// import { Home } from "../services/Home";

export const Main = () => {
  // Home.indexWeekly().then((res) => console.log(res));

  return (
    <div className="main">
      <Router>
        <Navbar />
        <div className="main__router">
          <AppRouter />
        </div>
      </Router>
    </div>
  );
};
