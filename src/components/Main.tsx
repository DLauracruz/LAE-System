import { Navbar } from "./shared/Navbar";
import { AppRouter } from "./routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

export const Main = () => {
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
