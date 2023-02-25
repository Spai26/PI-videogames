/* import routes */
import Detail from "./information/videogames/pages/Details/Detail";
import Home from "./information/components/Pages/Home/Home";
import Navigation from "./information/components/Partials/Navigation/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* import styles */
import "./information/css/app.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="hola">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/detail">
              <Detail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
