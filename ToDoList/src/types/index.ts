export type TaskPropsType = {
  task: {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
  };
};

export type TaskType = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

export type TasksPropsType = {
  tasks: Array<TaskType>;
};
