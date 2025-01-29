import PropTypes from 'prop-types';
import InputWithLabel from './InputWithLabel';  

function AddTodoForm({todoTitle, handleTitleChange, handleAddTodo}) {

  return (
     
    <form onSubmit={handleAddTodo}>
      <InputWithLabel id = "todoTitle" value={todoTitle} onInputChange={handleTitleChange}>
      Title:
      </InputWithLabel>
      <button type="submit">Add Task</button>
    </form>
  );

}

AddTodoForm.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
