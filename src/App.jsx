import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppRoutes from "./routes";

export default function App() {
  return (
    <Router>
      <Switch>
        {AppRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}
