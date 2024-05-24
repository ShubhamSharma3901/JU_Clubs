import { defineField } from "sanity";
import { ImClubs } from "react-icons/im";

const clubs = {
  name: "clubs",
  title: "Clubs",
  type: "document",
  icon: ImClubs,
  fields: [
    defineField({
      name: "name",
      title: "Name of the Club",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "clubLogo",
      title: "Club Logo",
      type: "image",
      description: "Upload a logo for the club",
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
      name: "bannerPhoto",
      title: "Upload Banner/Creative of Club",
      type: "image",
      options: { hotspot: true },
      required: true,
    },
    defineField({
      name: "overview",
      title: "Overview of the Club",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "about",
      title: "What we Do?",
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
    defineField({
      name: "what_we_are",
      title: "What we are?",
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
      name: "coordinatorName",
      title: "Faculty Coordintor Name",
      type: "string",
    },
    {
      name: "facultyDesignation",
      title: "Faculty Coordintor Designation",
      type: "string",
    },
    {
      name: "messageFaculty",
      title: "Message from Faculty Coordintor",
      type: "text",
    },
    {
      name: "contactMail",
      title: "Contact Information of Faculty Coordintor (E-mail)",
      type: "string",
    },
    // {
    //   name: "contactPhone",
    //   title: "Contact Information of Faculty Coordintor (Phone)",
    //   type: "string",
    // },
    {
      name: "coordinatorPhoto",
      title: "Upload Photo of Faculty Coordinator",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "presidentName",
      title: "President Name",
      type: "string",
    },
    {
      name: "presidentPhoto",
      title: "Upload Photo of President",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "vicePresidentName",
      title: "vicePresident Name",
      type: "string",
    },
    {
      name: "vicePresidentPhoto",
      title: "Upload Photo of Vice President ",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "treasurerName",
      title: "Treasurer Name",
      type: "string",
    },
    {
      name: "treasurerPhoto",
      title: "Upload Photo of Treasurer ",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add club's social media links:",
      fields: [
        {
          name: "twitter",
          title: "Twitter/X URL",
          type: "url",
          initialValue: "https://x.com/",
        },
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
          initialValue: "https://instagram.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "events",
      title: "Events",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "reference", to: [{ type: "events" }] }],
    },
  ],
};

export default clubs;
