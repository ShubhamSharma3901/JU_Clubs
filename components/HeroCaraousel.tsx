/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "react-alice-carousel/lib/alice-carousel.css";

const HeroCaraousel = () => {
  const slideRef = useRef<SlideshowRef>(null);
  return (
    <div className="max-h-fit">
      <Slide
        cssClass="h-fit "
        indicators={true}
        ref={slideRef}
        duration={3000}
        easing="ease-out"
        canSwipe={true}
        prevArrow={
          <div className="text-white transition hover:bg-white/20 flex flex-col justify-center items-center h-full px-6">
            <ArrowLeft />
          </div>
        }
        nextArrow={
          <div className="text-white transition hover:bg-white/20 flex flex-col justify-center items-center h-full px-6">
            <ArrowRight />
          </div>
        }>
        <div className=" w-[85%]  flex justify-center items-center">
          <div className="w-[30%] flex flex-col justify-center items-center gap-8">
            {/* <Image src={arpitSir} alt={""} className="rounded-full w-[70%]" /> */}
            <p className="uppercase text-xl font-montserrat font-bold tracking-wide">
              Shri Arpit Agrawal
            </p>
          </div>
          <div className="w-[70%] px-10 text-justify font-montserrat text-lg flex flex-col gap-5">
            <div className="w-full flex justify-end">{/* <QuoteIcon /> */}</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className=" w-[85%]  flex justify-center items-center">
          <div className="w-[30%] flex flex-col justify-center items-center gap-8">
            {/* <Image src={arpitSir} alt={""} className="rounded-full w-[70%]" /> */}
            <p className="uppercase text-xl font-montserrat font-bold tracking-wide">
              Prof. Sanjay Kr. Sharma
            </p>
          </div>
          <div className="w-[70%] px-10 text-justify font-montserrat text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div className=" w-[85%]  flex justify-center items-center">
          <div className="w-[30%] flex flex-col justify-center items-center gap-8">
            {/* <Image src={arpitSir} alt={""} className="rounded-full w-[70%]" /> */}
            <p className="uppercase text-xl font-montserrat font-bold tracking-wide">
              Prof. Victor Gambhir
            </p>
          </div>
          <div className="w-[70%] px-10 text-justify font-montserrat text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default HeroCaraousel;
