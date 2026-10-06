import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

export default function DashboardLayout({ children }) {
    return (
        <div className="h-screen flex overflow-hidden bg-gray-50">
            <div className="w-64 hidden md:block">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}