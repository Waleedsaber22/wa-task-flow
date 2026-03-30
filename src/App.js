import TaskDialog from "./components/TaskDialog";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <AppLayout>
      <Home />
      <TaskDialog />
    </AppLayout>
  );
}

export default App;
