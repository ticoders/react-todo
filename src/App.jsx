import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
 
function App() {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]) };

  return (
    <div>
      <h1>Add a list Item</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList = {todoList} />
    </div>

  );
}

export default App;
