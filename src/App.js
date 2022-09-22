import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const Todo = () => {
    const todos = useSelector(state => state.todos);
    const dispatch=useDispatch()
    const HandleClick = id => dispatch({
      type: "DELETE",
      payload:id
    })
  if (!todos || !todos.length) {
    return<p>No Todos</p>
  } else {
    return (
      <ul>
        {todos.map(todo => <li onClick={()=>HandleClick(todo.id)}>{ todo.label}</li>)}
      </ul>
    )
  }
    
  }
  const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo,setNewTodo]=useState()
    const ChangeHandler = (event) => { setNewTodo(event.target.value) }
    const ButtonHandler = () => dispatch({
      type: "ADD",
      payload: {
        label: newTodo,
        id:Math.ceil(Math.random()*100)
      }
    })
    return (<>
      <input type="text" onChange={ChangeHandler} value={newTodo} />
      <button onClick={ButtonHandler}> Add To Do</button>
      </>
    )
  }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo App
          </p>
          <Todo />
          <TodoInput />
      </header>
    </div>
  );
}

export default App;
