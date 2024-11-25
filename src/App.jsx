
<<<<<<< HEAD
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]) };
=======
>>>>>>> main

const todoList = [
  { id: 1, title: "Drink a glass of water" },
  { id: 2, title: "Study for upcoming Python quiz" },
  { id: 3, title: "Create R&D strategy for wellness project" }
];

function App (){
  return(
    <div>
<<<<<<< HEAD
      <h1>Add a list Item</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList = {todoList} />
=======
      <h1>
        Daily To-do List
      </h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
>>>>>>> main
    </div>
  );
};

export default App;