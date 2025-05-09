import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterProvider } from "./context/FilterContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <FilterProvider>
      <App />
    </FilterProvider>
  </QueryClientProvider>
);
