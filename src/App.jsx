import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import  {BrowserRouter , Routes , Route} from 'react-router-dom';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();

    const todos = data.records.map((record) => ({
      title: record.fields.title,
      id: record.id,
    }));

    setTodoList(todos);
    setIsLoading(false);
  } catch (error) {
    console.error(error.message);
  }
};
  useEffect(() => {
    fetchData();
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
  <BrowserRouter>
  <Routes>
  <Route path="/" element={
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
  }/>
  <Route path="/new" element = {
    <div>
      <h1>New To-Do List</h1>
    </div>
  }/>
</Routes>  
</BrowserRouter>
);
};

export default App;
