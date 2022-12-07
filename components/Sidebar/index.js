import SidebarMenu from "./SidebarMenu";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  ArrowPathRoundedSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="w-[230px] h-[590px] flex flex-col sticky top-16 bottom-0 -ml-3 overflow-y-auto scrollbar-thin scrollbar-thumb-yt-gray scrollbar-track-gray-transparent scrollbar-track-rounded-full">
      <SidebarMenu Icon={HomeIcon} title="Home" active />
      <SidebarMenu Icon={ArrowPathRoundedSquareIcon} title="Shorts" />
      <SidebarMenu Icon={RocketLaunchIcon} title="Subcriptions" />
    </div>
  );
}
