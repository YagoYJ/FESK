import { BrowserRouter, Switch, Route } from "react-router-dom";
import Affiliated from "./pages/Affiliated";
import Events from "./pages/Events";
import Galery from "./pages/Galery";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";
import Ranking from "./pages/Ranking";
import RankingDetails from "./pages/RankingDetails";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/institucional" component={Institucional} />
        <Route path="/events" component={Events} />
        <Route path="/galery" component={Galery} />
        <Route path="/affiliated" component={Affiliated} />
        <Route exact path="/ranking" component={Ranking} />
        <Route path="/ranking/details/:id" component={RankingDetails} />
      </Switch>
    </BrowserRouter>
  );
}
