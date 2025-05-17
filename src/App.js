import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
