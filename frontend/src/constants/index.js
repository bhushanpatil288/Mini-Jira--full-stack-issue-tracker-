import { RiUserLine, RiTimeLine, RiApps2AddLine, RiGitbookLine, RiStarLine, RiPlanetLine, RiArrowRightSLine, RiAddLine, RiMoreLine, RiGlobalLine, RiRemixRunLine, RiKanbanView2, RiCalendarLine, RiPagesLine, RiArchiveStackLine  } from "@remixicon/react";
import jiraIcon from "/images/jira-safari-pintab-icon.svg";
import natureIcon from "/images/10413.svg";

const navList1 = [
  {
    title: "For you",
    icon: RiUserLine,
    more : false,
    plus: false
  },{
    title: "Recent",
    icon: RiTimeLine,
    more: RiArrowRightSLine,
    plus: false
  },{
    title: "Starred",
    icon: RiStarLine,
    more : RiArrowRightSLine,
    plus: false
  },{
    title: "Apps",
    icon: RiApps2AddLine,
    more : false,
    plus: false
  },{
    title: "Plans",
    icon: RiGitbookLine,
    more : false,
    plus: false
  },{
    title: "Spaces",
    icon: RiPlanetLine,
    more : false,
    plus: RiAddLine,
    actions: RiMoreLine,
  }
]

const navigationList = [
  {
    title: "Summary",
    icon: RiGlobalLine
  },{
    title: "Backlog",
    icon: RiRemixRunLine
  },{
    title: "Board",
    icon: RiKanbanView2
  },{
    title: "Calender",
    icon: RiCalendarLine
  },{
    title: "Timeline",
    icon: RiGitbookLine
  },{
    title: "Pages",
    icon: RiPagesLine
  },{
    title: "Forms",
    icon: RiArchiveStackLine
  }
]

export { jiraIcon, natureIcon ,navList1, navigationList };