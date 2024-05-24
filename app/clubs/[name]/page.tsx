"use client";
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import swaraag from "@/public/Swaraag.jpg";
import { cn } from "@/lib/utils";
import axios from "axios";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { TypedObject } from "sanity";
import { list } from "postcss";
import { GiBullets } from "react-icons/gi";
import { PiListBullets } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import SanityImage from "@/components/SanityImage";
import { Mail, Phone } from "lucide-react";

function Page({ params }: { params: { name: string } }) {
  const search = useSearchParams();
  const id = search.get("id");
  const router = useRouter();
  const [aboutDetails, setAboutDetails] = React.useState<
    TypedObject | TypedObject[]
  >([]);
  const [whatWeAreDetails, setWhatWeAreDetails] = React.useState<
    TypedObject | TypedObject[]
  >([]);
  const [coordinator, setCoordinator] = useState<any>();

  useEffect(() => {
    const clubData = axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/clubsDetails`,
      {
        headers: {
          id: id,
        },
      }
    );

    clubData.then((data: any) => {
      const [dataFinal] = data.data.map((item: any) => {
        return item.about;
      });

      const [whatWeAre] = data.data.map((item: any) => {
        return item.what_we_are;
      });

      setCoordinator(data.data[0]);
      setAboutDetails(dataFinal);
      setWhatWeAreDetails(whatWeAre);
    });
  }, [id]);

  console.log(coordinator);

  const components: any = {
    block: {
      h1: ({ children }: { children: React.ReactNode }) => {
        return <h1 className="text-4xl">{children}</h1>;
      },
      h2: ({ children }: { children: React.ReactNode }) => {
        return <h1 className="text-xl">{children}</h1>;
      },
      h3: ({ children }: { children: React.ReactNode }) => {
        return <h1 className="text-lg">{children}</h1>;
      },
      h4: ({ children }: { children: React.ReactNode }) => {
        return <h1 className="text-[1.2rem] font-semibold">{children}</h1>;
      },
      h5: ({ children }: { children: React.ReactNode }) => {
        return <h1 className="text-sm">{children}</h1>;
      },
      h6: ({ children }: { children: React.ReactNode }) => {
        return <h1 className="text-xs">{children}</h1>;
      },
    },
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <ul className="space-y-2">{children}</ul>
      ),
    },

    listItem: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <li className="flex justify-items-center">
          <FaCircle className="h-auto w-2 mr-2" />
          {children}
        </li>
      ),
    },
  };
  return (
    <div>
      <NavBar />
      {coordinator && (
        <Banner
          title={decodeURI(params.name)}
          src={coordinator?.bannerPhoto ?? swaraag}
        />
      )}

      {/* Overview */}
      <div className="flex flex-col gap-10 w-full laptop:px-[10rem] xsPhone:px-[2rem] py-[5rem] justify-center items-center text-justify text-wrap font-montserrat">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
            Who We Are?
          </h1>
          <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
        </div>

        <div className="w-full flex justify-center items-center pt-8">
          {coordinator && (
            <div className="flex flex-col justify-center items-center w-[90%] gap-10">
              <SanityImage
                src={coordinator.clubLogo!}
                className="w-[30%] max-w-[10rem] h-auto"
              />
              <div className="w-[70%] text-center">
                <p className="text-lg italic">
                  {`" `}
                  {coordinator.overview}
                  {` "`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Events */}
      <div className="flex flex-col gap-10 w-full laptop:px-[10rem] xsPhone:px-[2rem] py-[5rem] justify-center items-center text-justify text-wrap font-montserrat">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
            Events
          </h1>
          <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
        </div>

        <div>
          <div className="relative group flex justify-center items-center gap-8">
            <div
              className={cn(
                "absolute inset-[-0.05rem] rounded-lg bg-white blur-sm  hover:bg-[#DE1819] hover:blur-md transition "
              )}></div>
            <div
              className="rounded-xl p-10 border font-semibold hover:bg-[#DE1819] hover:text-white hover:font-bold tracking-wider relative bg-white text-wrap w-full h-fit gap-8  uppercase font-montserrat tablet:text-[1rem] xsPhone:text-[11px] text-center flex flex-col justify-center items-center hover:scale-105 transition cursor-pointer"
              onClick={() =>
                router.push(
                  `${process.env.NEXT_PUBLIC_APP_URL}/events/upcoming?club=${id}` ||
                    ""
                )
              }>
              <p>Upcoming</p>
            </div>

            <div
              className="rounded-xl p-10 border font-semibold hover:bg-[#DE1819] hover:text-white hover:font-bold tracking-wider relative bg-white text-wrap w-full h-fit gap-8  uppercase font-montserrat tablet:text-[1rem] xsPhone:text-[11px] text-center flex flex-col justify-center items-center hover:scale-105 transition cursor-pointer"
              onClick={() =>
                router.push(
                  `${process.env.NEXT_PUBLIC_APP_URL}/events/archives?club=${id}` ||
                    ""
                )
              }>
              <p>Archives</p>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="w-full border bg-[#DE1819] laptop:px-[10rem] xsPhone:px-[2rem] py-[3.5rem] text-white font-montserrat space-y-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
            What We Do?
          </h1>
          <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-white" />
        </div>
        <div className="text-wrap space-y-6">
          <PortableText value={aboutDetails} components={components} />
        </div>
      </div>
      <div className="w-full bg-white laptop:px-[10rem] xsPhone:px-[2rem] py-[5rem] text-black font-montserrat space-y-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
            What We Are?
          </h1>
          <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-[#DE1819]" />
        </div>
        <div className="text-wrap space-y-6">
          <PortableText value={whatWeAreDetails} components={components} />
        </div>
      </div>

      {/* Faculty Coordinator */}
      <div className="flex flex-col gap-10 w-full laptop:px-[10rem] xsPhone:px-[2rem] py-[3.5rem] justify-center items-center text-justify text-wrap font-montserrat">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
            Faculty Coordinator
          </h1>
          <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
        </div>

        <div className="w-full flex justify-center items-center pt-8">
          {coordinator && (
            <div className="flex w-[90%] gap-10">
              <SanityImage
                src={coordinator.coordinatorPhoto!}
                className="w-[30%]"
              />
              <div className="flex flex-col gap-10">
                <div className="space-y-2">
                  <p className="font-semibold text-[#DE1819] text-2xl">
                    {coordinator.coordinatorName}
                  </p>
                  <p className=" text-black text-md">
                    {coordinator.facultyDesignation}
                  </p>
                </div>
                <div>
                  <p className="  text-xl italic">
                    {`"`}
                    {coordinator.messageFaculty}
                    {`"`}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className=" flex gap-4 text-lg">
                    <Mail className="h-auto w-5" />
                    {coordinator.contactMail}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Team Members */}
      <div className="flex flex-col gap-10 w-full laptop:px-[10rem] xsPhone:px-[2rem] py-[3.5rem] justify-center items-center text-justify text-wrap font-montserrat">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
            Team Members
          </h1>
          <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
        </div>

        <div className="w-full  grid tablet:grid-cols-3 phone:grid-cols-1 phone:gap-10  pt-8">
          {coordinator && (
            <>
              <div className="flex flex-col  phone:w-[80%] tablet:gap-10 phone:gap-2 ">
                <SanityImage
                  src={coordinator.presidentPhoto!}
                  className="w-[90%]"
                />
                <div className="flex flex-col gap-10">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#DE1819] text-2xl">
                      {coordinator.presidentName}
                    </p>
                    <p className=" text-black text-md">President</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  phone:w-[80%] tablet:gap-10 phone:gap-2">
                <SanityImage
                  src={coordinator.vicePresidentPhoto!}
                  className="w-[90%]"
                />
                <div className="flex flex-col gap-10">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#DE1819] text-2xl">
                      {coordinator.vicePresidentName}
                    </p>
                    <p className=" text-black text-md">Vice President</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  phone:w-[80%] tablet:gap-10 phone:gap-2">
                <SanityImage
                  src={coordinator.treasurerPhoto!}
                  className="w-[90%]"
                />
                <div className="flex flex-col gap-10">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#DE1819] text-2xl">
                      {coordinator.treasurerName}
                    </p>
                    <p className=" text-black text-md">Treasurer</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
