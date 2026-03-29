import TaskCard from "./TaskCard";

export default function Column({ column }) {
  return (
    <div className="bg-[#ebf0f0] rounded-lg p-4 flex flex-col h-[calc(100vh-120px)] min-w-[350px] max-w-[350px] grow">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-2 h-2 rounded-full ${column.color}`} />
        <h2 className="text-sm font-bold tracking-wide">
          {column.title}
        </h2>
        <span className="text-xs w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full text-gray-700">0</span>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-3 overflow-y-auto">
        {/* Static demo tasks */}
        <TaskCard />
        <TaskCard />
      </div>

      {/* Add Task */}
      <button className="mt-4 border border-dashed border-gray-400 rounded-md py-2 text-sm text-gray-500 hover:bg-gray-300">
        + Add task
      </button>
    </div>
  );
}