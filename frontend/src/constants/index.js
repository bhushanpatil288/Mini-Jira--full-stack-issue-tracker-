import { RiUserLine, RiTimeLine, RiApps2AddLine, RiGitbookLine, RiStarLine, RiPlanetLine, RiArrowRightSLine, RiAddLine, RiMoreLine  } from "@remixicon/react";
import jiraIcon from "/images/jira-safari-pintab-icon.svg";

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

export { jiraIcon, navList1 };