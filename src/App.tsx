import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Layouts/Header"
import HomePage from "./Pages/Home";
//import Dashboard from "./Pages/Dashboard"
import Report from "./Pages/Report"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },/*
  {
    path: "/dashboard",
    element: <Dashboard />,
  },*/
  {
    path: "/report",
    element: <Report />,
  },
]);

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="my-10">
        <RouterProvider router= {router} />
      </main>
    </>
  );
}

export default App;
