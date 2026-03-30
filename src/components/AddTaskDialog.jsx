import { useState } from "react";
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
import { useAddTask } from "../services/tasksQueries";
 
export default function AddTaskDialog({ open, onClose, column }) {
  const { mutate: addTask } = useAddTask();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = () => {
    if (!title.trim()) return;

    addTask(
      {
        title,
        description,
        column,
        priority,
      }
    );

    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
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
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}