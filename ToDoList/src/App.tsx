import { Container, Typography } from "@mui/material";

import "./App.css";
import ToDoList from "./components/ToDoList";
import { useAppSelector } from "./hooks/redux";

function App() {
  const { tasks } = useAppSelector((state) => state.taskReducer);
  return (
    <Container>
      <Typography
        m={2}
        sx={{ borderBottom: 1, textAlign: "center", letterSpacing: 4 }}
        variant="h2"
      >
        Simple ToDoList
      </Typography>
      <ToDoList tasks={tasks} />
    </Container>
  );
}

export default App;
