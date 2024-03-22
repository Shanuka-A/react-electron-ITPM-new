import Footer from "components/footer/Footer";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import { Home } from "lucide-react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "routes.js";

export default function Admin(props) {
  const { ...rest } = props;
  const [open, setOpen] = React.useState(true);

  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (const element of routes) {
      if (window.location.href.indexOf(element.layout + element.path) !== -1) {
        return element.secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route path="/" element={<Navigate to="/home" replace />} />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
