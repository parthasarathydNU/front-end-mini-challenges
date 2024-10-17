import Calculator from "./components/Calculator";
import TrafficLight from "./components/TrafficLight";
import Layout from "./components/ui/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import ProgressBar from "./components/ProgressBar";
import Welcome from "./components/Welcome";

const routerPaths = [
  {
    path: "",
    name: "Menu",
    element: <Welcome />,
  },
  {
    path: "/calculator",
    name: "Calculator",
    element: <Calculator />,
  },
  {
    path: "/traffic-lights",
    name: "Traffic Lights",
    element: <TrafficLight />,
  },
  {
    path: "/progress-bar",
    name: "Progress Bar",
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
