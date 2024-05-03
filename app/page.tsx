import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Overview from "@/components/Overview";
import Image from "next/image";
import building from "@/public/building.png";
import Mission_Vission from "@/components/M&V";
import Messages from "@/components/Messages";
import axios from "axios";

export default async function Home() {
  const navList = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/navList`
  );
  console.log(navList.data);
  return (
    <main className="">
      <NavBar />
      <Banner src={building} title="JECRC Clubs and Societies" />
      {navList.data && <Hero navList={navList.data} />}
      <Overview />
      {/* <Mission_Vission /> */}
    </main>
  );
}
