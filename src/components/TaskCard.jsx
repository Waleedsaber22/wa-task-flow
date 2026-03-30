import {
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Box,
} from "@mui/material";
import { PRIORITIES } from "../constants/priorities";
import { useDeleteTask } from "../services/tasksQueries";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { openEditDialog } from "../features/ui/uiSlice";
import { useDispatch } from "react-redux";
import { useDraggable } from "@dnd-kit/core";

export default function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: task, // important
    });

  const style = {
    zIndex: isDragging ? 1000 : "auto",
    ...(transform
      ? {
          transform: `translate(${transform.x}px, ${transform.y}px)`,
        }
      : {}),
  };

  const dispatch = useDispatch();

  const priority = PRIORITIES[task.priority];
  const { mutate: deleteTask } = useDeleteTask();

  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      variant="outlined"
      sx={{
        borderRadius: 2,
        cursor: "pointer",
        position: "relative",
        "&:hover .delete-btn, &:hover .edit-btn": {
          opacity: 1,
        },
      }}
      className="shrink-0"
    >
      <CardContent>
        <Box className="flex justify-between items-start">
          <Typography
            className="text-gray-800"
            variant="subtitle2"
            fontWeight={600}
            gutterBottom
          >
            {task.title}
          </Typography>

          <Box>
            {/* Edit button (hidden by default) */}
            <IconButton
              className="edit-btn"
              size="small"
              onMouseDown={(e) => {
                e.stopPropagation(); // prevent opening edit
                dispatch(openEditDialog(task));
              }}
              sx={{
                opacity: 0,
                transition: "0.2s",
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            {/* Delete button (hidden by default) */}
            <IconButton
              className="delete-btn"
              size="small"
              onMouseDown={(e) => {
                e.stopPropagation(); // prevent opening edit
                deleteTask(task.id);
              }}
              sx={{
                marginLeft: "7px",
                opacity: 0,
                color: "red",
                transition: "0.2s",
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
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
