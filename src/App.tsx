import { RouterProvider } from "react-router-dom";
import { routes } from "./app/Helpers/Routes/RouteDefinitions.jsx";

const router = routes;

function App() {
  return <RouterProvider router={router} />;

}

export default App;
