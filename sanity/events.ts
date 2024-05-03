import { Rule, defineField, validation } from "sanity";

import { BiParty } from "react-icons/bi";

const events = {
  name: "events",
  title: "Events",
  type: "document",
  icon: BiParty,
  fields: [
    defineField({
      name: "name",
      title: "Name of the Event",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "clubs",
      title: "Club",
      type: "array",
      description: "Add the organizing clubs for the event",
      of: [{ type: "reference", to: [{ type: "clubs" }] }],
      validation: (rule) => rule.required(),
    }),
    {
      name: "eventBannerImage",
      title: "Event Banner Image",
      type: "image",
      description: "Upload Banner Image for the Event",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "eventPhotos",
      title: "Event Photos",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
      description: "Upload photos for the Event",
      options: { hotspot: true, layout: "grid" },
    },
    {
      name: "driveUrl",
      title: "Google Drive URL for the Event Photos",
      type: "string",
    },
    defineField({
      name: "description",
      title: "Description of the Event",
      type: "array",
      of: [
        {
          type: "block",
          validation(rule) {
            return rule.required();
          },
        },
      ],
    }),
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
    },
    {
      name: "isCompleted",
      title: "Is this event completed?",
      type: "boolean",
    },
    // {
    //   name: "coordinatorPhoto",
    //   title: "Upload Photo of Faculty Coordinator",
    //   type: "image",
    //   options: { hotspot: true },
    // },
  ],
};

export default events;
