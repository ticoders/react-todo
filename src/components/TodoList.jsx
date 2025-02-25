import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div>
      <h2>Daily To-do List</h2>
      {todoList.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
          ))}
        </ul>
      )}
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
