import { Box, Typography, Button } from "@mui/material";
import TaskCard from "./TaskCard";
import { useTasks } from "../services/tasksQueries";
import { useDispatch, useSelector } from "react-redux";
import { openCreateDialog } from "../features/ui/uiSlice";
import { useDroppable } from "@dnd-kit/core";

export default function Column({ column }) {
  const { setNodeRef, active } = useDroppable({
    id: column.key,
  });

  const isDragging = Boolean(active);
  const search = useSelector((state) => state.ui.search);

  const { data: tasks = [] } = useTasks();
  const filteredTasks = tasks.filter(
    (t) =>
      t.column === column.key &&
      (t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()))
  );
  const dispatch = useDispatch();

  return (
    <Box
      ref={setNodeRef}
      className="flex flex-col min-w-[350px] max-w-[350px] h-[calc(100vh-120px)]"
      sx={{
        backgroundColor: "#ebf0f0",
        borderRadius: 2,
        p: 2,
      }}
    >
      {/* Header */}
      <Box className="flex items-center gap-2 mb-4">
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
          }}
          className={column.color}
        />

        <Typography variant="subtitle2" fontWeight="bold">
          {column.title}
        </Typography>

        <Box className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
          <Typography variant="caption">{tasks.length}</Typography>
        </Box>
      </Box>

      {/* Tasks */}
      <Box
        className={`flex flex-col gap-3 ${isDragging ? "overflow-y-clip" : "overflow-y-auto"} max-h-[calc(100%-95px)] custom-scrollbar`}
      >
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Box>

      {/* Add Task */}
      <Button
        variant="outlined"
        sx={{
          mt: 2,
          borderStyle: "dashed",
          textTransform: "none",
        }}
        onClick={() => dispatch(openCreateDialog(column.key))}
        className="!text-gray-700 !border-gray-300"
      >
        + Add task
      </Button>
    </Box>
  );
}
