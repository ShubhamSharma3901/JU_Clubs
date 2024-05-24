"use client"
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import React, {useEffect} from "react";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import building from "@/public/Swaraag.jpg";
import axios from "axios";
import {useSearchParams} from "next/navigation";
import banner from "@/components/Banner";

function Layout({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const [bannerImage, setBannerImage] = React.useState(null);

    const clubName = searchParams.get("club");

    useEffect(() => {
        const req = axios.get("/api/clubsDetails",{
            headers:{
                "id": clubName
            }
        });

        req.then(data => {
            console.log(data.data[0])
            setBannerImage(data.data[0].bannerPhoto)
        })
    }, [clubName]);

  return (
    <div className="h-full">
      <NavBar />
        {bannerImage && <Banner title="Archives" src={bannerImage} />}
      <CustomProvider>{children}</CustomProvider>
    </div>
  );
}

export default Layout;
