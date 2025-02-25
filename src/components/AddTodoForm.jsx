import PropTypes from 'prop-types';
import InputWithLabel from './InputWithLabel';  
import styles from '../App.module.css';

function AddTodoForm({ todoTitle, handleTitleChange, onAddTodo }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (todoTitle.trim()) {
      onAddTodo(event);  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel id="todoTitle" value={todoTitle} onInputChange={handleTitleChange}>
        Title:
      </InputWithLabel>
      <button type="submit" className={styles.Button}>Add Task</button>
    </form>
  );
}

AddTodoForm.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired, // Removed unnecessary handleAddTodo
};

export default AddTodoForm;
