import React, { useState } from 'react';
// Material-UI Imports
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
// Other Imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { addTodo, removeTodo, setTodoStatus } from "./redux/todosSlice";


function App() {
  //React Hooks
  const [todoDescription, setTodoDescription] = useState("");
  
  // Redux Hooks
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector((state: RootState) => state);

  return (
    <Container maxWidth="xs">
      <Typography variant="h3" align="center">
        Todo List
      </Typography>
      <TextField
        label="Todo Description"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >
        Add Todo
      </Button>
      <List>
        {todoList.map((todo) => (
             <ListItem key={todo.id}>
            <ListItemText
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Checkbox
                edge="end"
                value={todo.completed}
                onChange={() => {
                  dispatch(
                    setTodoStatus({ completed: !todo.completed, id: todo.id })
                  );
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>


    </Container>
  );
}

export default App;
