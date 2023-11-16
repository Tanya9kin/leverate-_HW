import * as React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import store from "./store";

import App from "./App";

const queryClient = new QueryClient();

const Root: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <App />
      </QueryClientProvider>
    </Provider>
  );
};

export default Root;
