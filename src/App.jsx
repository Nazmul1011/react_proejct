import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { FooterHome } from "./pages/home/footerHome";


function App() {
  return (
    <div>
      <Navbar />

      <main >
        <Outlet />
      </main>
      <FooterHome></FooterHome>

    </div>
  );
}
export default App;
