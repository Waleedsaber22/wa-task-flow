import { Card, CardContent, Typography, Chip } from "@mui/material";
import { PRIORITIES } from "../constants/priorities";

export default function TaskCard({ task }) {
  const priority = PRIORITIES[task.priority];

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          {task.title}
        </Typography>

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