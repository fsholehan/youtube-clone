export default function SidebarMenu({ Icon, title, active }) {
  return (
    <div
      className={`flex items-center space-x-8 hover:bg-yt-smooth duration-150 cursor-pointer px-4 py-3 rounded-md ${
        active ? "bg-yt-smooth hover:bg-yt-gray" : ""
      }`}
    >
      <Icon className="h-6" />
      <span className="font-medium">{title}</span>
    </div>
  );
}
