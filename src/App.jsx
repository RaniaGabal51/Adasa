import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import ArticleDetails from "./pages/Blog/ArticleDetails";
import Notfound from "./pages/Notfound/Notfound";

let route = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
      { path: "blog/:slug", element: <ArticleDetails /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="font-tajawal">
        <RouterProvider router={route}></RouterProvider>
      </div>
    </>
  );
}

export default App;
