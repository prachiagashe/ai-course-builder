import Addcourse from "./_components/Addcourse";

export default function Dashboard() {
    return (
        <div>
            <Addcourse />
            
            {/* Future course list can go here */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Your Courses</h3>
                <div className="text-gray-500 bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                    You haven't created any courses yet.
                </div>
            </div>
        </div>
    );
}
