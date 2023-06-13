import { useState } from "react";

import { Box, Button, Stack, TextField } from "@mui/material";

import Task from "./Task/Task";

import { useAppDispatch } from "~/hooks/redux";
import { taskSlice } from "~/store/reducers/TaskSlice";
import { TaskType, TasksPropsType } from "~/types";

const ToDoList = ({ tasks }: TasksPropsType) => {
  const { addTask } = taskSlice.actions;
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const generateUniqueId = () => {
    return (
      tasks.reduce((acc: number, item: TaskType) => {
        if (item.id > acc) {
          return item.id;
        }
        return acc;
      }, 0) + 1
    );
  };
  const newTask = {
    id: generateUniqueId(),
    title: title,
    description: description,
    isDone: false,
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title != "" && description != "") {
      dispatch(addTask(newTask));
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="tasks-list">
      <Box
        pt={2}
        sx={{
          backgroundColor: "white",
          border: "4px solid #dddddd",
        }}
      >
        <form onSubmit={onSubmit}>
          <TextField
            sx={{ marginX: 1, minWidth: "320px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="filled-basic"
            label="Title"
            variant="filled"
          />
          <TextField
            sx={{ marginX: 1, minWidth: "320px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="filled-basic"
            label="Description"
            variant="filled"
            multiline
          />
          <Box sx={{ padding: 1 }}>
            <Button
              variant="contained"
              sx={{ display: "block", width: "100%", bgcolor: "success.light" }}
              type="submit"
            >
              Add
            </Button>
          </Box>
        </form>
      </Box>
      <Box mt={2}>
        <Stack spacing={2}>
          {tasks.map((t: TaskType) => (
            <Task task={t} key={t.id}></Task>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default ToDoList;
