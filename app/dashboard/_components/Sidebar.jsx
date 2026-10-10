import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

export default function Sidebar() {
  const menuList = [
    { id: 1, name: "Home", icon: "🏠", path: "/dashboard" },
    { id: 2, name: "Explore", icon: "🔍", path: "/dashboard/explore" },
    { id: 3, name: "Upgrade", icon: "⭐", path: "/dashboard/upgrade" },
  ];

  return (
    <div className="h-full p-5 shadow-sm border-r flex flex-col bg-white">
      <div className="flex items-center gap-2 font-bold text-2xl text-purple-900 mb-10">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-md" />
        <span>AlphaWave</span>
      </div>

      <div className="flex flex-col gap-2 flex-grow">
        {menuList.map((menu) => (
          <Link key={menu.id} href={menu.path}>
            <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700 transition-all">
              <span className="text-xl">{menu.icon}</span>
              <span className="font-medium">{menu.name}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-auto">
        <SignOutButton>
          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700 transition-all">
            <span className="text-xl">🚪</span>
            <span className="font-medium">Logout</span>
          </div>
        </SignOutButton>
      </div>
    </div>
  );
}
