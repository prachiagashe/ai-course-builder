import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center bg-white">
      <div>
        {/* Placeholder for left side search or title */}
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
