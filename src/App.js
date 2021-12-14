import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import { Container, makeStyles, Typography } from '@material-ui/core';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Купить Хлеб' },
    { id: 2, completed: false, title: 'Купить Рыбу' },
    { id: 3, completed: false, title: 'Купить Яйца' },
    { id: 4, completed: false, title: 'Купить Мясо' },
    { id: 5, completed: false, title: 'Купить Рыбу' },
    { id: 6, completed: false, title: 'Купить Яйца' }
  ])

  function toggleTodo(id) {
    setTodos (todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const useStyles = makeStyles({
    cont: {
      margin: 0 + ' auto',
      backgroundColor: "#bdbdbd",
      textAlign: 'center',
      borderRadius: "10px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  })

  const classesCont = useStyles();

  return (
    <Context.Provider value={{removeTodo}}>
      <Container className={classesCont.cont} fixed>
        <Typography variant='h3'>To Do List</Typography>
        <TodoList className='da' todos={todos} onToggle={toggleTodo} />
      </Container>
    </Context.Provider>
  );
}

export default App
