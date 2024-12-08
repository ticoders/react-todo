import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
 
function App() {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]) };

  return (
<<<<<<< Updated upstream


const todoList = [
  { id: 1, title: "Drink a glass of water" },
  { id: 2, title: "Study for upcoming Python quiz" },
  { id: 3, title: "Create R&D strategy for wellness project" }
];
=======
import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {

  const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList") || "[]")
  const [todoList, setTodoList] = useState(savedTodoList);

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];

}
 
function App() {
  
  const [todoList,setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]) };
>>>>>>> Stashed changes

function App (){
  return(
    <div>
      <h1>Add a list Item</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList = {todoList} />
    </div>

  );
}

export default App;
