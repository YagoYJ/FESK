import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/institucional" component={Institucional} />
      </Switch>
    </BrowserRouter>
  );
}
