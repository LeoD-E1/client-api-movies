import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={SignUp} exact />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
