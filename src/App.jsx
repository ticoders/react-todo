import TodoList from './TodoList';
import TodoForm from './AddTodoForm';
 
function App() {
  return (
    <div>
       <h1>Add a list Item</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
