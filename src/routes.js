import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Lista from "./pages/Lista";

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/lista" component={Lista} />
      </Switch>
    </BrowserRouter>
  );
}