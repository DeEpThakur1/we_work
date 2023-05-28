import { search, inbox, notifications, help } from "@/public";

const btn = [
  {
    id: 1,
    path: "../basicinfo",
    names: "Basic Info",
  },

  {
    id: 2,
    path: "../files",
    names: "Files",
  },

  {
    id: 3,
    path: "../mutualplan",
    names: "Mutual Action Plan",
  },

  {
    id: 4,
    path: "../contact",
    names: "Contact",
  },
];
const navLinks = [
  {
    id: 1,
    title: "Search",
    icon: search,
  },

  {
    id: 2,
    title: "Inbox",
    icon: inbox,
  },

  {
    id: 3,
    title: "Notification",
    icon: notifications,
  },
  { id: 4, title: "Help", icon: help },
];
export { btn, navLinks };
