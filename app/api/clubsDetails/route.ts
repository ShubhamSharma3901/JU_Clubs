import {
  getCalenderEvent,
  getClubDetails,
  getNavList,
} from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const headers = req.headers;
  try {
    const res = await getClubDetails(headers.get("id")!);
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json({ "error in clubDetails GET route === ": err });
  }
}
