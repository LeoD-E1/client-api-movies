import React from "react";
import AuthScreen from "./screens/AuthScreen";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AuthScreen />
      </div>
    </QueryClientProvider>
  );
}

export default App;
