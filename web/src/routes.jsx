import { BrowserRouter, Switch, Route } from "react-router-dom";
import Events from "./pages/Events";
import Galery from "./pages/Galery";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/institucional" component={Institucional} />
        <Route path="/events" component={Events} />
        <Route path="/galery" component={Galery} />
      </Switch>
    </BrowserRouter>
  );
}
