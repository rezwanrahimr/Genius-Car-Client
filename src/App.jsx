import { RouterProvider } from "react-router-dom";
import Routes from "../src/Router/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
