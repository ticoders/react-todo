import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
 
  useEffect(() => {
    const savedTodos = localStorage.getItem('todoList');
    if (savedTodos) {
      setTodoList(JSON.parse(savedTodos));
    }
  }, []);

   
  useEffect(() => {
    if (todoList.length > 0) {
      console.log("Saving to Local Storage:", todoList);  
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList]);

   
  const addTodo = (event) => {
    event.preventDefault();
    if (!todoTitle.trim()) return;

    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    setTodoList([...todoList, newTodo]);
    setTodoTitle('');
  };
 
  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm
        todoTitle={todoTitle}
        handleTitleChange={(event) => setTodoTitle(event.target.value)}
        handleAddTodo={addTodo}
      />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default App;
