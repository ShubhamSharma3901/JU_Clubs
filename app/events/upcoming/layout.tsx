import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import React from "react";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import building from "@/public/Swaraag.jpg";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <NavBar />
      <Banner title="Upcoming Events" src={building} />
      <CustomProvider>{children}</CustomProvider>
    </div>
  );
}

export default layout;
