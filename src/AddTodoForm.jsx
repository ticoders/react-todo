import PropTypes from 'prop-types';

function  AddTodoForm(props) {

  const handleAddTodo = (event) => {

    event.preventDefault();
    const todoTitle = event.target.title.value;
    props.onAddTodo(todoTitle);
    console.log(todoTitle);
    event.target.reset();

  }
  return (
     
    <form onSubmit={handleAddTodo}>
      <label htmlFor="taskName"> Title  </label>
      <input type="text" id="taskName" name="title" />
      <button type="submit">Add Task</button>
    </form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
