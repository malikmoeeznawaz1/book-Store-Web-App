import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <main className="min-h-screen">
        <Outlet /> 
      </main>
      <footer>Footer</footer>
    </>
  ) 
}

export default App


// Outlet bas children ko render karta hai, jesa k router.jsx mein define kiya gaya hai
  // waha jo jo children hen sab change hoty rahen gy, me ny App ko render kiya hai
  // aur us mein Outlet ko render kiya hai, <App/> k children diffrent pages hen like About, Orders etc
  // jab bhi koi page change hoga to Outlet us page ko render karega
  // aur App me sy navbar or footer har page par render hoga