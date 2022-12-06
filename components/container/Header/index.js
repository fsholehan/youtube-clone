import {
  Bars3Icon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { MicrophoneIcon } from "@heroicons/react/24/solid";

export default function Header({ isShow }) {
  return (
    <header className="py-3 flex items-center justify-between sticky top-0 z-50 bg-yt-dark">
      <div className="flex items-center gap-3">
        <button
          onClick={isShow}
          className="p-1 hover:bg-yt-smooth trannsition duration-100 rounded-full"
        >
          <Bars3Icon className="h-7" />
        </button>
        <h1 className="text-lg font-semibold">YouTube</h1>
      </div>
      <div className="w-[690px] mx-auto flex items-center gap-3">
        <form className="flex items-center flex-1 bg-transparent rounded-full border border-yt-gray overflow-hidden h-[38px]">
          <input
            className="flex-1 outline-none bg-inherit px-4"
            type="text"
            placeholder="Search"
          />
          <button className="bg-yt-gray h-full w-14 flex items-center justify-center">
            <MagnifyingGlassIcon className="h-6" />
          </button>
        </form>
        <button className="h-[38px] w-[38px] bg-yt-gray flex items-center justify-center rounded-full">
          <MicrophoneIcon className="h-6 text-white" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="h-[38px] w-[38px] hover:bg-yt-gray transition duration-100 flex items-center justify-center rounded-full">
          <VideoCameraIcon className="h-6 text-white" />
        </button>
        <button className="h-[38px] w-[38px] hover:bg-yt-gray transition duration-100 flex items-center justify-center rounded-full">
          <BellIcon className="h-6 text-white" />
        </button>
        <button className="h-[38px] w-[38px] bg-gradient-to-br from-rose-400 to-red-500 transition duration-100 flex items-center justify-center rounded-full">
          <h1 className="text-lg">f</h1>
        </button>
      </div>
    </header>
  );
}
