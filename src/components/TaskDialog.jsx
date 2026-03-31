import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { PRIORITIES } from "../constants/priorities";
import { useAddTask, useUpdateTask } from "../services/tasksQueries";
import { useDispatch, useSelector } from "react-redux";
import { closeTaskDialog } from "../features/ui/uiSlice";

export default function TaskDialog() {
  const dispatch = useDispatch();
  const { isTaskDialogOpen, task, column } = useSelector((state) => state.ui);

  const isEdit = Boolean(task);

  const { mutate: addTask } = useAddTask();
  const { mutate: updateTask } = useUpdateTask();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
    } else {
      setTitle("");
      setDescription("");
      setPriority();
    }
  }, [task, isTaskDialogOpen]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (isEdit) {
      updateTask({
        ...task,
        title,
        description,
        priority,
        isUpdating: true,
      });
    } else {
      addTask({
        title,
        description,
        column,
        priority,
      });
    }

    dispatch(closeTaskDialog());
  };

  return (
    <Dialog
      open={isTaskDialogOpen}
      onClose={() => dispatch(closeTaskDialog())}
      fullWidth
    >
      <DialogTitle>Add Task</DialogTitle>

      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          select
          label="Priority"
          fullWidth
          margin="normal"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {Object.keys(PRIORITIES).map((key) => (
            <MenuItem key={key} value={key}>
              {PRIORITIES[key].label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => dispatch(closeTaskDialog())}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          {isEdit ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
