import Calculator from "./components/Calculator";
import TrafficLight from "./components/TrafficLight";
import Layout from "./components/ui/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import ProgressBar from "./components/ProgressBar";

const routerPaths = [
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/traffic-lights",
    element: <TrafficLight />,
  },
  {
    path: "/progress-bar",
    element: <ProgressBar />,
  },
];

const router = createBrowserRouter(routerPaths);

function App() {
  return (
    <AppContext.Provider value={routerPaths}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
