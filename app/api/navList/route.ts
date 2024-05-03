import { getCalenderEvent, getNavList } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const headers = req.headers;
  try {
    const res = await getNavList();
    console.log(res);
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json({ "error in navList GET route === ": err });
  }
}
