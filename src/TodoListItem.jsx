
import PropTypes from 'prop-types';

const TodoListItem = ({todo, onRemoveTodo}) => {
  return (
  <li>
      {todo.title}
      <button type = "button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
  </li>
    );
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

export default TodoListItem;



 