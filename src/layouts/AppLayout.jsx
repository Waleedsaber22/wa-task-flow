import { Box, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/ui/uiSlice";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function AppLayout({ children }) {
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100/80">
      <Box className="flex items-center justify-between px-6 py-3 border-b">
        {/* Left side */}
        <Box className="flex items-center gap-3">
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 2,
              backgroundColor: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DashboardIcon sx={{ color: "#fff", fontSize: 20 }} />
          </Box>

          <Box>
            <Typography
              className="!-mb-1.5 !font-inter !leading-normal"
              variant="subtitle1"
              fontWeight={700}
            >
              KANBAN BOARD
            </Typography>
            <Typography variant="caption" color="text.secondary">
              10 tasks
            </Typography>
          </Box>
        </Box>
        <TextField
          size="small"
          sx={{
            "& input::placeholder": {
              color: "#6b7280",
              opacity: 1,
              border: "none",
            },
            "& input": {
              color: "#4b5563",
            },
          }}
          className="bg-gray-200/70 w-64"
          placeholder="Search tasks..."
          variant="outlined"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </Box>

      {/* Main Content */}
      <main className="px-6 pt-6">{children}</main>
    </div>
  );
}
