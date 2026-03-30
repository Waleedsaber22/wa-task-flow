import { Provider as ReduxProvider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../app/store";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReduxProvider>
  );
}
