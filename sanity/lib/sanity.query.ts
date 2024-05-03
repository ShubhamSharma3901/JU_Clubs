import { archiveEvent, calenderEvent } from "@/types";
import { client } from "./client";
import { groq } from "next-sanity";
import { start } from "repl";

export async function getCalenderEvent(clubName: string) {
  const data = await client.fetch<any>(
    groq`*[_type == "events" && !isCompleted && references(clubs[*]._ref, $clubName)]{
            _id,
            name,
            startDate,
            endDate
          }`,
    { clubName },
    {
      cache: "no-cache",
    }
  );
  const dataFinal = data.map((item: calenderEvent) => {
    if (
      (new Date(item.startDate) > new Date() ||
        new Date(item.startDate).setTime(0) == new Date().setTime(0)) &&
      new Date(item.startDate).setTime(0) <= new Date(item.endDate).setTime(0)
    ) {
      return {
        _id: item._id,
        name: item.name,
        startDate: new Date(item.startDate),
      };
    }
  });

  return dataFinal.filter((item: calenderEvent) => item != null);
}
export async function getArchivesEvent(clubName: string) {
  const data = await client.fetch<any>(
    groq`*[_type == "events" && isCompleted && references(clubs[*]._ref, $clubName)]{
            _id,
            name,
            startDate,
            endDate,
          }`,
    { clubName },
    {
      cache: "no-cache",
    }
  );
  const dataFinal = data.map((item: archiveEvent) => {
    if (item.startDate <= item.endDate) {
      return {
        _id: item._id,
        name: item.name,
        startDate: new Date(item.startDate),
        endDate: new Date(item.endDate),
      };
    }
  });

  return dataFinal.filter((item: archiveEvent) => item != null);
}
export async function getNavList() {
  const data = await client.fetch<any>(
    groq`*[_type == "clubs"]{
      name,
      clubLogo,
      _id
    }`,
    {},
    {
      cache: "no-cache",
    }
  );
  console.log(data[0].clubLogo.asset);
  return data;
}
export async function getClubDetails(id: string) {
  const data = await client.fetch<any>(
    groq`*[_type == "clubs" && _id == $id]{
      name,
      about,
      _id,
      coordinatorName,
      coordinatorPhoto,
      contactMail,
      contactPhone,
      messageFaculty,
      facultyDesignation,
      clubLogo,
      overview
    }`,
    { id },
    {
      cache: "no-cache",
    }
  );
  return data;
}
export async function getEventDetails(id: string) {
  const data = await client.fetch<any>(
    groq`*[_type == "events" && _id == $id]{
      name,
      _id,
     eventPhotos,
     eventBannerImage,
     description,
     driveUrl
    }`,
    { id },
    {
      cache: "no-cache",
    }
  );
  return data;
}
