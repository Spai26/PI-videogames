/* import routes */
import Detail from "./information/videogames/pages/Details/Detail";
import Landing from "./information/components/Pages/Landing/Landing";
import Home from "./information/components/Pages/Home/Home";
import Error404 from "./information/components/Pages/Error/Error404";
import NavBar from "./information/components/Partials/Navigation/NavBar";
import Create from "./information/videogames/pages/Create/Create";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
/* import styles */
import "./information/css/app.css";
function App() {
  const location = useLocation();
  return (
    <Router>
      <div className="App">
       {/*  {location.pathname !== "/" ? "" : } */}
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/create" component={Create} />

          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
