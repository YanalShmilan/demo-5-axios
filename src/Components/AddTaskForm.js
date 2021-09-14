import React, { useState } from 'react';
import taskStore from '../stores/taskStore';

export default function AddTaskForm(props) {
  const [task, setTask] = useState({
    title: '',
    priority: '',
  });
  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    taskStore.createTask(task);
    setTask({
      title: '',
      priority: '',
    });
  };
  return (
    <div class="col-md-12">
      <form onSubmit={handleSubmit}>
        <div class="main-todo-input-wrap">
          <div class="main-todo-input fl-wrap">
            <div class="main-todo-input-item">
              <input
                type="text"
                id="todo-list-item"
                placeholder="What will you do today?"
                name="title"
                required
                value={task.title}
                onChange={handleChange}
              />
            </div>
            <select
              className="form-select select"
              name="priority"
              id="prio"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="">Priority</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>

            <button class="add-items main-search-button" onClick={handleSubmit}>
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
