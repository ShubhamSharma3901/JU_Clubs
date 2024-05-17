/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image, { StaticImageData } from "next/image";
import * as banner from "@/public/HomePageBanner.png";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

function Banner({ title, src }: { title: string; src: StaticImageData }) {
  return (
    <div className="relative h-fit w-full border">
      <Image
        src={src}
        className="tablet:h-auto xsPhone:h-[55ch]  w-fit object-cover filter brightness-50 "
        alt="dp"
      />
      <p className="z-[200] text-pretty text-shadow absolute text-white translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] font-bold font-montserrat text-4xl drop-shadow-lg">
        {title}
      </p>
    </div>
  );
}

export default Banner;
