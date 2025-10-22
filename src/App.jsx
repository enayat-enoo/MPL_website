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
import UpdateScore from "./components/UpdateScore";
import ScoreBoard from "./components/ScoreBoard";
import ScheduleMatch from "./components/ScheduleMatch";
import MatchPreview from "./components/MatchPreview";


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
    path : '/scheduleMatch',
    element : <ScheduleMatch/>
  },
  {
    path : '/score/:matchId',
    element : <ScoreBoard/>
  },
  {
    path : 'matchpreview',
    element : (
      <ProtectedRoute element={<MatchPreview/>}/>
    )
  },
  {
    path : '/updatescore/:matchId',
    element : <UpdateScore/>
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
