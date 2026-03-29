import { COLUMNS } from "../constants/columns";
import Column from "./Column";


export default function Board() {
  return (
    <div className="flex gap-4 overflow-auto">
      {COLUMNS.map((col) => (
        <Column key={col.key} column={col} />
      ))}
    </div>
  );
}