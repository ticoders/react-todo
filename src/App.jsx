import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
  new Promise((resolve) => {
    setTimeout(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todoList') || '[]');
      resolve(savedTodos);
    }, 2000);  
  }).then((fetchedTodos) => {
    setTodoList(fetchedTodos);
    setIsLoading(false); 
  });
}, []);


   
 useEffect(() => {
  if (!isLoading) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}, [todoList, isLoading]);


   
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
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <AddTodoForm
          todoTitle={todoTitle}
          handleTitleChange={(event) => setTodoTitle(event.target.value)}
          handleAddTodo={addTodo}
        />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      </>
    )}
  </div>
);

};

export default App;
