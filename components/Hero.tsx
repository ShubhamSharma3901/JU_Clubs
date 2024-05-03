"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import nss from "@/public/SwaragLogo.png";
import { client, urlForImage } from "@/sanity/lib/client";
import { AnyCnameRecord } from "dns";
import { useNextSanityImage } from "next-sanity-image";
import SanityImage from "./SanityImage";

type navItem = {
  name: string;
  clubLogo?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _id?: string;
};

const navList = [
  {
    title: "NCC",
    logo: nss,
  },
  {
    title: "NSS",
    logo: nss,
  },
  {
    title: "UBA",
    href: "/funded-projects",
    logo: nss,
  },
  {
    title: "EBSB",
    href: "/patents",
    logo: nss,
    // fields: [
    //   {
    //     name: "Created",
    //   },
    //   {
    //     name: "Published",
    //   },
    //   {
    //     name: "Submitted",
    //   },
    // ],
  },
];

function Hero({ navList }: { navList: navItem[] }) {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center items-center pt-[5rem] gap-10">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="uppercase font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
          Quick Links
        </h1>
        <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
      </div>

      <div className="grid tablet:w-[85%] xsPhone:w-full laptop:grid-cols-4 tablet:grid-cols-2 xsPhone:grid-cols-2 grid-rows-auto gap-6 tablet:px-10 xsPhone:px-6">
        {navList.map((navItem, index) => {
          return (
            <>
              <div className="relative group">
                <div
                  className={cn(
                    "absolute inset-[-0.05rem] rounded-lg bg-white blur-sm  group-hover:bg-[#DE1819] group-hover:blur-md transition "
                  )}></div>
                <div
                  className="rounded-xl border font-semibold group-hover:bg-[#DE1819] group-hover:text-white group-hover:font-bold tracking-wider relative bg-white text-wrap w-full h-fit gap-8 py-10 uppercase font-montserrat tablet:text-[1rem] xsPhone:text-[11px] text-center flex flex-col justify-center items-center hover:scale-105 transition cursor-pointer"
                  key={index}
                  onClick={() =>
                    router.push(
                      `${process.env.NEXT_PUBLIC_APP_URL}/clubs/${navItem.name}?id=${navItem._id}` ||
                        ""
                    )
                  }>
                  <p>{navItem.name}</p>
                  {navItem.clubLogo && (
                    <SanityImage
                      src={navItem.clubLogo}
                      className="w-[10rem] object-cover"
                    />
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Hero;
