import { Box } from "@mui/material";
import { COLUMNS } from "../constants/columns";
import Column from "./Column";

export default function Board() {
  return (
    <Box className="flex gap-4 overflow-x-auto pb-2">
      {COLUMNS.map((col) => (
        <Column key={col.key} column={col} />
      ))}
    </Box>
  );
}