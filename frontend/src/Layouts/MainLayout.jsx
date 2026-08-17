import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Slidebar from "../components/Slidebar.jsx";

function MainLayout() {
  return (
    <div className="bg-[#F6F6F6] h-full selection:bg-[#00B597] selection:text-white">
      <Navbar />
      <div className="mt-[64px]">
        <Slidebar />

        {/* <AutoComplete/> */}
        <div className="lg:ml-[210px] lg:relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
