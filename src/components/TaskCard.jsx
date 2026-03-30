import { Card, CardContent, Typography, Chip, IconButton, Box } from "@mui/material";
import { PRIORITIES } from "../constants/priorities";
import { useDeleteTask } from "../services/tasksQueries";
import { useState } from "react";
import TaskDialog from "./TaskDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { openEditDialog } from "../features/ui/uiSlice";
import { useDispatch } from "react-redux";
import { useDraggable } from "@dnd-kit/core";

export default function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform } =
  useDraggable({
    id: task.id,
    data: task, // important
  });

  const style = transform
  ? {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    }
  : undefined;

  const dispatch = useDispatch();

  const priority = PRIORITIES[task.priority];
  const { mutate: deleteTask } = useDeleteTask();

  return (
    <Card 
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        variant="outlined" sx={{
          borderRadius: 2,
          cursor: "pointer",
          position: "relative",
          "&:hover .delete-btn": {
            opacity: 1,
          },
        }}
        onClick={() => dispatch(openEditDialog(task))}
        onMouseDown={(e) => e.stopPropagation()}
        >
      <CardContent>
         <Box className="flex justify-between items-start">
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              {task.title}
            </Typography>

            {/* Delete button (hidden by default) */}
            <IconButton
              className="delete-btn"
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // prevent opening edit
                deleteTask(task.id);
              }}
              sx={{
                opacity: 0,
                transition: "0.2s",
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>

        <Typography className="block" variant="caption" color="text.secondary">
          {task.description}
        </Typography>


        {priority && (
          <Chip
            label={priority.label}
            size="small"
            className={`!rounded ${priority.color} ${priority.bg}`}
            sx={{
              mt: 1,
              fontWeight: 600,
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}