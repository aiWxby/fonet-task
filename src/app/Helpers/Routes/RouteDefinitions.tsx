import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../../../Layouts/RootLayout";
import HomePage from "../../../Pages/Home";
import Reports from "../../../Pages/Dashboard";
import Report from "../../../Pages/Report";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout /> }>
      <Route index element={<HomePage />} />
      <Route path="reports">
        <Route index element={<Reports />} />
        <Route path="add" element={<Report />} />
      </Route>
    </Route>
  )
);