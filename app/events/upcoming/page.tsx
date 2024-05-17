"use client";
import { calenderEvent } from "@/types";
import { Calendar, Whisper, Popover, Badge } from "rsuite";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

const monthOP = {
  start: new Date("2024-01-01"),
  end: new Date("2024-06-01"),
};

const Page = () => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const clubName = searchParams.get("club");

  const [event, setEvent] = useState<calenderEvent[]>();

  const [todayEvent, setTodayEvent] = useState<
    {
      name: string;
      id: string;
    }[]
  >();

  useEffect(() => {
    const eventData = axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/calenderEvent`,
      {
        headers: {
          clubName: clubName,
        },
      }
    );
    eventData.then((data: any) => {
      const dataFinal = data.data.map((item: calenderEvent) => {
        return {
          _id: item._id,
          name: item.name,
          startDate: new Date(item.startDate),
        };
      });
      setEvent(dataFinal);
      dataFinal.map((item: calenderEvent) => {
        if (
          item.startDate.getFullYear() === new Date().getFullYear() &&
          item.startDate.getMonth() === new Date().getMonth() &&
          item.startDate.getDate() === new Date().getDate()
        ) {
          setTodayEvent((event) => [
            ...(event?.filter((evt) => {
              if (evt.id !== item._id) {
                return evt;
              }
            }) ?? []),
            {
              name: item.name,
              id: item._id!,
            },
          ]);
        }
      });
    });
  }, [clubName]);
  console.log("event", event);
  function renderCell(date: Date) {
    if (event != undefined && date > new Date()) {
      if (event.length > 0) {
        const dates = event?.filter((item, index) => {
          return (
            item.startDate.getFullYear() === date.getFullYear() &&
            item.startDate.getMonth() === date.getMonth() &&
            item.startDate.getDate() === date.getDate()
          );
        });

        if (
          dates?.length ||
          (dates?.length &&
            dates[0].startDate.setTime(0) === new Date().setTime(0))
        ) {
          return (
            <div
              className="flex justify-center items-center w-full pt-2 group"
              onClick={() => {
                router.push(`/events/${dates[0]._id}?club=${clubName}`);
              }}>
              <div className="flex justify-center items-center w-fit ">
                <span className="text-red-500 group-hover:underline">
                  {dates[0].name}
                </span>
              </div>
            </div>
          );
        }
      }
    }

    return null;
  }
  function cellRenderClassName(date: Date): string {
    if (date > new Date() && event != undefined) {
      if (event.length > 0) {
        const dates = event?.filter(
          (item) =>
            item.startDate.getFullYear() === date.getFullYear() &&
            item.startDate.getMonth() === date.getMonth() &&
            item.startDate.getDate() === date.getDate()
        );

        if (dates?.length) {
          return "outline outline-red-400";
        }
      }
    }

    return "";
  }
  return (
    <div className="flex flex-col justify-center items-center h-fit w-screen">
      <div className="mt-12 mb-6">
        <Banner>
          {todayEvent &&
            todayEvent.length > 0 &&
            todayEvent.map((event, index) => {
              return (
                <>
                  <div className="flex w-full justify-between border-t border-gray-200 bg-[#DE1819] rounded-xl p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex items-center font-montserrat">
                      <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="mr-3 animate-pulse inline-flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 "></span>
                        <span className="[&_p]:inline text-white">
                          Today&apos;s Event : {event?.name} &nbsp;
                          <Link
                            href={`${process.env.NEXT_PUBLIC_APP_URL}/events/${event?.id}?club=${clubName}`}
                            className="ml-0 flex items-center text-sm font-bold text-white hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex">
                            View Event Details
                            <HiArrowRight className="ml-2" />
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
        </Banner>
      </div>
      <Calendar
        bordered
        renderCell={(date) => renderCell(date)}
        className="w-[75%]"
        cellClassName={(date) => {
          return cellRenderClassName(date);
        }}
        onMonthChange={(date) => {
          if (
            date.getFullYear() !== new Date().getFullYear() ||
            date.getMonth() < monthOP.start.getMonth() ||
            date.getMonth() > monthOP.end.getMonth()
          ) {
            alert("Please select the current year");
            date.setFullYear(Date.now());
          }
        }}
      />
    </div>
  );
};
export default Page;
