"use client";

import { getEventDetails } from "@/sanity/lib/sanity.query";
import { archiveEvent } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<archiveEvent>[] = [
  {
    accessorKey: "name",
    header: "Title of Event",
    cell: ({ row }) => {
      return (
        <Link
          href={`/events/${row.original._id as string | ""}`}
          className="text-start font-medium underline">
          {row.original.name}
        </Link>
      );
    },
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("startDate"));

      return (
        <div className="text-start font-medium">{date.toDateString()}</div>
      );
    },
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("endDate"));

      return (
        <div className="text-start font-medium">{date.toDateString()}</div>
      );
    },
  },
];
