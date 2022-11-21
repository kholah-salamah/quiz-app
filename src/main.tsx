import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import "./index.css";

import { Center, ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <BrowserRouter>
            <Flex
              width={"100vw"}
              height={"100vh"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <App />
            </Flex>
          </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </CookiesProvider>
  </React.StrictMode>
);
