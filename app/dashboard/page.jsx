import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <UserButton afterSignOutUrl="/" />
            </div>
            <div>
                Welcome to your dashboard!
            </div>
        </div>
    );
}
