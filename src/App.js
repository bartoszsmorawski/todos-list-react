import React from "react";
import Tasks from "./features/tasks/Tasks";
import {
  BroserRouter,
  Link,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

export default () => (
  <BrowserRouter>
    <nav>
      <ul>
        <Link to="/zadania">Zadania</Link>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);
