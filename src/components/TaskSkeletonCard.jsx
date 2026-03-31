import { Card, CardContent, Skeleton, Box } from "@mui/material";

export default function TaskCardSkeleton() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ mb: 1 }}>
          <Skeleton variant="rounded" width={60} height={24} />
        </Box>

        <Skeleton variant="text" width="70%" height={20} />
        <Skeleton variant="text" width="90%" height={16} sx={{ mt: 1 }} />
      </CardContent>
    </Card>
  );
}
