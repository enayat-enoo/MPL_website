import MPLHomePage from './MplHomePage'
import ZulfiqarStrikers from './pages/ZulfiqarStrikers'
import BadshahXI from './pages/BadshahXI'
import RsiiXI from './pages/RsiiXI'
import SamuraiXI from './pages/SamuraiXI'
import MaskedihMavericks from './pages/MaskedihMavericks'
import MaskedihStrikers from './pages/MaskedihStrikers'
import MaskedihSuperKings from './pages/MaskedihSuperKings'
import MaskedihWarriors from './pages/MaskedihWarriors'
import PageNotFound from './pages/PageNotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header'
import './App.css'

let router=createBrowserRouter([
 {
  path: "/",
  element : <MPLHomePage/>
 },
 {
  path : "/zulfiqarstrikers",
  element : <ZulfiqarStrikers/>
 },
 {
  path : "/badshahxi",
  element : <BadshahXI/>
 },
 {
  path : '/maskedihsuperkings',
  element : <MaskedihSuperKings/>
 },
 {
  path : '/maskedihmavericks',
  element : <MaskedihMavericks/>
 },
 {
  path : '/maskedihwarriors',
  element : <MaskedihWarriors/>
 },
 {
  path : '/maskedihstrikers',
  element : <MaskedihStrikers/>
 },
 {
  path : '/samuraixi',
  element : <SamuraiXI/>
 },
 {
  path : '/rsiixi',
  element : <RsiiXI/>
 },
 {
  path : "*",
  element : <PageNotFound/>
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
