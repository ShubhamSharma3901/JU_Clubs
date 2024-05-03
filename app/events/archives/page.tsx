"use client";
import { archiveEvent, calenderEvent } from "@/types";
import { Calendar, Whisper, Popover, Badge } from "rsuite";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Page = () => {
  const searchParams = useSearchParams();

  const clubName = searchParams.get("club");

  const [event, setEvent] = useState<archiveEvent[]>();

  useEffect(() => {
    const eventData = axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/archiveEvent`,
      {
        headers: {
          clubName: clubName,
        },
      }
    );
    eventData.then((data: any) => {
      const dataFinal = data.data.map((item: archiveEvent) => {
        return {
          _id: item._id,
          name: item.name,
          startDate: new Date(item.startDate),
          endDate: new Date(item.endDate),
        };
      });
      setEvent(dataFinal);
    });
  }, [clubName]);

  return (
    <div className="flex flex-col justify-center items-center py-10 w-screen">
      <div className="w-[80%]">
        {event && <DataTable columns={columns} data={event!} />}
      </div>
    </div>
  );
};
export default Page;
