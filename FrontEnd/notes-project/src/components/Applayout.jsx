import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Applayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-full m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Applayout;
