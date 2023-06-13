import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { ITask } from "~/models/ITask";
import { TaskType } from "~/types";

interface TaskStore {
  tasks: ITask[];
}

const storedData = localStorage.getItem("tasks");

const initialState: TaskStore = {
  tasks: storedData !== null ? JSON.parse(storedData) : [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<TaskType>) {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, action: PayloadAction<TaskType>) {
      state.tasks = state.tasks.filter((i) => i.id != action.payload.id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    confirmTask(state, action: PayloadAction<TaskType>) {
      const { id, isDone } = action.payload;
      state.tasks = state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: isDone,
          };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const taskReducer = taskSlice.reducer;
