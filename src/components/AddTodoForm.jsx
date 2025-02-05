import PropTypes from 'prop-types';
import InputWithLabel from './InputWithLabel';  
import styles from '../App.module.css';

function AddTodoForm({todoTitle, handleTitleChange, handleAddTodo, onAddTodo}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (todoTitle.trim()) {
      onAddTodo(todoTitle); 
    }

    handleAddTodo(event);
  };

  return (
     
    <form onSubmit={handleSubmit}>
      <InputWithLabel id = "todoTitle" value={todoTitle} onInputChange={handleTitleChange}>
      Title:
      </InputWithLabel>
      <button type="submit" className={styles.Button}>Add Task</button>
    </form>
  );

}

AddTodoForm.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
