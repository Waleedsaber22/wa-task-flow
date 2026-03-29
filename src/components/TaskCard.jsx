import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function TaskCard() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" fontWeight="600" gutterBottom>
          Sample Task Title
        </Typography>

        <Typography variant="caption" color="text.secondary">
          This is a short task description to match the UI.
        </Typography>

        {/* Priority */}
        <Chip
          label="HIGH"
          size="small"
          sx={{
            mt: 1,
            backgroundColor: "#fee2e2",
            color: "#dc2626",
            fontWeight: 600,
          }}
        />
      </CardContent>
    </Card>
  );
}