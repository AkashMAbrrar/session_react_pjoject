import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

const MainLayout = () => {
  return (
    <div>
      {/* navBar  */}

      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto">
        {/* Dynamic section */}
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
