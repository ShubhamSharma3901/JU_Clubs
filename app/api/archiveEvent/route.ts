import { getArchivesEvent } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const headers = req.headers;
  try {
    const res = await getArchivesEvent(headers.get("clubName") as string);

    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json({ "error in archiveEvent GET route === ": err });
  }
}
