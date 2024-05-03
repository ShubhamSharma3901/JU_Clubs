import Banner from "@/components/Banner";
import HeroCaraousel from "@/components/HeroCaraousel";
import NavBar from "@/components/NavBar";
import SanityImage from "@/components/SanityImage";
import { PortableText } from "@portabletext/react";
import axios from "axios";
import React from "react";
import { FaCircle } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

async function Page({ params }: { params: { event: string } }) {
  const events = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/eventDetails`,
    {
      headers: {
        id: params.event!,
      },
    }
  );
  const event = events.data[0];

  console.log(event);

  event.eventPhotos = event.eventPhotos.slice(0, 6);

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
      {/* Banner */}
      <div className="relative h-fit w-full border">
        <SanityImage
          className="tablet:h-auto xsPhone:h-[55ch] w-fit object-cover filter brightness-50 "
          src={event.eventBannerImage}
        />
        <p className="z-[200] text-pretty text-shadow absolute text-white translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] font-bold font-montserrat text-4xl drop-shadow-lg">
          {event.name}
        </p>
      </div>
      {/* About Event */}
      <div className="w-full  laptop:px-[10rem] xsPhone:px-[2rem] py-[3.5rem] text-black font-montserrat space-y-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
            About Event
          </h1>
          <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-[#DE1819]" />
        </div>
        <div className="text-wrap space-y-6">
          <PortableText value={event.description} components={components} />
        </div>
      </div>
      {/* Event Gallery */}
      <div className="w-full  laptop:px-[10rem] xsPhone:px-[2rem] py-[3.5rem] text-black font-montserrat space-y-20 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
            Event Gallery
          </h1>
          <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-[#DE1819]" />
        </div>
        <div className="text-wrap gap-10 grid laptop:grid-cols-3 phone:grid-cols-1 tablet:grid-cols-2">
          {event.eventPhotos &&
            event.eventPhotos.length &&
            event.eventPhotos.map((image: any, index: any) => {
              return (
                <div key={index} className="flex justify-center items-center">
                  <Dialog>
                    <DialogTrigger className="hover:scale-105 transition">
                      <SanityImage src={image} className="" />
                    </DialogTrigger>
                    <DialogContent className="p-0 flex justify-center items-center tablet:w-fit phone:w-[90vw] border-none bg-transparent">
                      <SanityImage
                        src={image}
                        className=" tablet:w-[50vw] phone:w-fit "
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              );
            })}
        </div>
        <div>
          <Link
            href={event.driveUrl || ""}
            className="flex hover:underline transition font-semibold">
            View All Photos <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
