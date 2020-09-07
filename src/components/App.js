import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Excercises from "../pages/Exercises";
import ExcerciseNew from "../pages/ExerciseNew";
import NotFound from "../pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/exercises" component={Excercises} />
      <Route exact path="/exercise/new" component={ExcerciseNew} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
