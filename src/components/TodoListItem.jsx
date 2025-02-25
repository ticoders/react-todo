import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';
 


const TodoListItem = ({todo, onRemoveTodo}) => {
  return (
  <li className={styles.ListItem}>
      {todo.title}
      <button className={styles.button} type = "button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
  </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

export default TodoListItem;



 