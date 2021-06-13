import leadership from "../assets/webp/men_group.webp";
import events from "../assets/webp/pexels-jacob-morch-426976.webp";
import giving from "../assets/webp/pexels-min-an-1454797.webp";
import messages from "../assets/webp/pexels-rodnae-productions-7551413.webp";

export const services = [
  {
    day: "Sunday",
    time: "9.00am - 11.00am",
    description: "We meet on Sunday morning for our Worship Service. ",
  },
  {
    day: "Tuesday",
    time: "6.30pm - 8.00pm",
    description:
      "On Tuesday evenings, we meet again for our Teaching Service. ",
  },
  {
    day: "Friday",
    time: "6.30pm - 8.00p",
    description:
      "Then we meet again on Friday evenings for our Prayer Service.",
  },
];

export const homeTabs = [
  { label: "Leadership", image: leadership, navigation: "/leadership" },
  { label: "Covid-19 Protocols", image: events, navigation: "/" },
  { label: "Giving", image: giving, navigation: "/giving" },
  { label: "Messages", image: messages, navigation: "/messages" },
];

export const links = [
  { label: "Home", navigation: "/" },
  { label: "About", navigation: "/about " },
  { label: "Giving", navigation: "/giving" },
  { label: "Messages", navigation: "/messages" },
  { label: "Men Ministry", navigation: "/men" },
  { label: "Youth Ministry", navigation: "/youth" },
  { label: "The Leadership", navigation: "/leadership" },
  { label: "Women Ministry", navigation: "/women" },
];
