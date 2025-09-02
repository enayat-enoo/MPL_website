import MPLHomePage from "./MplHomePage";
import Teams from "./components/Teams";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import Header from "./Header";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "../ProtectedRoute";
import { ToastContainer } from "react-toastify";
import UpdateScore from "./components/updateScore";
import ScoreBoard from "./components/ScoreBoard";



let router = createBrowserRouter([
  {
    path: "/",
    element: <MPLHomePage />,
  },
  {
    path: "/team/:teamId",
    element: <Teams />,
  },
  {
    path: "/registration",
    element: (
      <ProtectedRoute element={<RegistrationForm/>} />
    )
  },
  {
    path : '/signup',
    element : <Signup/>
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path : '/updateScore',
    element : (
      <ProtectedRoute element={<UpdateScore/>} />
    )
  },
  {
    path : '/score',
    element : <ScoreBoard/>
  }
]);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  );
}

export default App;
