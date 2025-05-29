import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import "./font.css";
import "swiper/css";
import "swiper/css/navigation";
import "react-photo-view/dist/react-photo-view.css";
import "react-inner-image-zoom/lib/styles.min.css";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
