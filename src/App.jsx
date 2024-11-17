import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
 
function App() {

  const [newTodo,setNewTodo] = useState('');

  return (
    <div>
      <h1>Add a list Item</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>New Todo: {newTodo}</p>
      <TodoList />
    </div>

  );
}

export default App;
