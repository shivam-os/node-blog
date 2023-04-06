import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway/700.css";
import "@fontsource/lato/400.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
  fonts: {
    heading: `"Raleway", sans-serif`,
    body: `"Lato", sans-serif`,
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
