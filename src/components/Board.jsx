import { Box } from "@mui/material";
import { COLUMNS } from "../constants/columns";
import Column from "./Column";
import { useUpdateTask } from "../services/tasksQueries";
import { DndContext } from "@dnd-kit/core";

export default function Board() {
    const {mutate: updateTask}= useUpdateTask()

    const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const task = active.data.current;
    const newColumn = over.id;

    if (task.column === newColumn) return;

    updateTask({
      ...task,
      column: newColumn,
    });
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box className="flex gap-4 overflow-x-auto pb-2">
        {COLUMNS.map((col) => (
          <Column key={col.key} column={col} />
        ))}
      </Box>
    </DndContext>
  );
}