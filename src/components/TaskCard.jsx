export default function TaskCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      
      <h3 className="text-sm font-semibold mb-1">
        Sample Task Title
      </h3>

      <p className="text-xs text-gray-500 mb-2">
        This is a short task description to match the UI.
      </p>

      {/* Priority */}
      <span className="inline-block text-xs px-2 py-1 rounded bg-red-100 text-red-600">
        HIGH
      </span>

    </div>
  );
}