import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";
import Events from "./pages/Events";
import Galery from "./pages/Galery";
import Affiliated from "./pages/Affiliated";
import Ranking from "./pages/Ranking";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/institucional" component={Institucional} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/galery" component={Galery} />
        <Route exact path="/affiliated" component={Affiliated} />
        <Route exact path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
}
