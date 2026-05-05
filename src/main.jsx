import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./Pages/Quiz.jsx";
import Login from "./Pages/Login.jsx";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import SignUp from "./Pages/SignUp.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";

import "./i18n.js"; //For languages internationalizatio

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/quiz",
        element: (
          <ProtectedRoutes>
            <Quiz />
          </ProtectedRoutes>
        ),
      },
      { path: "/about-us", element: <About /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
