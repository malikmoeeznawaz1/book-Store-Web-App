import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-lg mx-auto px-4 py-6 font-primary">
        <Outlet /> 
      </main>
      <Footer />
    </>
  ) 
}

export default App


// Outlet bas children ko render karta hai, jesa k router.jsx mein define kiya gaya hai
  // waha jo jo children hen sab change hoty rahen gy, me ny App ko render kiya hai
  // aur us mein Outlet ko render kiya hai, <App/> k children diffrent pages hen like About, Orders etc
  // jab bhi koi page change hoga to Outlet us page ko render karega
  // aur App me sy navbar or footer har page par render hoga