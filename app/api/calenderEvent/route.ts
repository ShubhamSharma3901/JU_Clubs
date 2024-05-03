import { getCalenderEvent } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const headers = req.headers;
  try {
    const res = await getCalenderEvent(headers.get("clubName") as string);
    console.log("res", res);
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json({ "error in calenderEvent GET route === ": err });
  }
}
