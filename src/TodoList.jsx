import TodoListItem from './TodoListItem';

const todoList = [
  { id: 1, title: "Drink a glass of water" },
  { id: 2, title: "Study for upcoming Python quiz" },
  { id: 3, title: "Create R&D strategy for wellness project" }
];

function TodoList (){
  return(
    <div>
      <h2>
        Daily To-do List
      </h2>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;