import PropTypes from 'prop-types';
import { useState } from 'react';

function  AddTodoForm({onAddTodo}) {

  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value)
  }

  const handleAddTodo = (event) => {

    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle('');

  }
  return (
     
    <form onSubmit={handleAddTodo}>
      <label htmlFor="taskName"> Title  </label>
      <input type="text" id="taskName" name="title" value={todoTitle} onChange={handleTitleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
