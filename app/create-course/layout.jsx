import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function CreateCourseLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header specific to the create course page */}
      <div className="p-5 shadow-sm border-b flex justify-between items-center bg-white">
        <Link href="/dashboard">
          <div className="flex items-center gap-2 font-bold text-xl text-purple-900 cursor-pointer">
            <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-md" />
            <span>AlphaWave</span>
          </div>
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
