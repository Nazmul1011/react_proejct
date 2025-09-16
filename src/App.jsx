import { Outlet } from "react-router";


function App(){

  return <div>
    <nav>Navbar</nav>
    <Outlet />
    <main className="h-screen"></main>
    
    <footer>Footer</footer>
  </div>
}
export default App;