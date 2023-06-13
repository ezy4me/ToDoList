import DeleteIcon from "@mui/icons-material/Delete";
import { Card, Typography, Button, Switch, Grid, Box } from "@mui/material";
import "./task.scss";

import { useAppDispatch } from "~/hooks/redux";
import { taskSlice } from "~/store/reducers/TaskSlice";
import { TaskPropsType } from "~/types";

const Task = ({ task }: TaskPropsType) => {
  const { deleteTask, confirmTask } = taskSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTask = {
      ...task,
      [event.target.name]: event.target.checked,
    };
    dispatch(confirmTask(updatedTask));
  };

  return (
    <Card className={`${task.isDone ? "task-done" : ""}`} variant="outlined">
      <Box sx={{ my: 1, p: 2 }}>
        <Grid item sx={{ paddingY: 2 }} container spacing={2}>
          <Grid item xs={2}>
            <Typography
              sx={{
                padding: 1,
                borderBottom: 1,
                borderRadius: 2,
                bgcolor: "#eeeeee",
                borderColor: "#9e9e9e",
                letterSpacing: 4,
              }}
              variant="h5"
            >
              #{task.id}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
              variant="h5"
            >
              {task.title}
            </Typography>
            <Typography variant="h6">{task.description}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.light",
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Switch
          name="isDone"
          checked={task.isDone}
          onChange={handleChange}
          color="default"
        />
        <Button
          startIcon={<DeleteIcon />}
          onClick={() => dispatch(deleteTask(task))}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default Task;
