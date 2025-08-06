import MPLHomePage from './MplHomePage'
import Teams from './components/Teams'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header'
import './App.css'


let router=createBrowserRouter([
  {
    path : '/',
    element : <MPLHomePage/>
  },
  {
  path: "/team/:teamId",
  element: <Teams />
}
]);
function App() {

  return (
    <>
    <Header/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
