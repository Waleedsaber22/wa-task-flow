import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/ui/uiSlice";

export default function AppLayout({ children }) {
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100/80">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        {/* Left: Title */}
        <div>
          <h1 className="text-lg font-bold tracking-wide">KANBAN BOARD</h1>
          <p className="text-sm text-gray-500">0 tasks</p>
        </div>

        {/* Right: Search */}
        <div className="w-72">
          <TextField
            fullWidth
            size="small"
            className="bg-gray-200"
            placeholder="Search tasks..."
            variant="outlined"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">{children}</main>
    </div>
  );
}
