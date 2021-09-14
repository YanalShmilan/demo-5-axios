import React from 'react';
import TaskItem from './TaskItem';
import taskStore from '../stores/taskStore';
import { observer } from 'mobx-react';
function TasksList() {
  const tasksList = taskStore.tasks.map((task) => <TaskItem task={task} />);

  return (
    <div class="row">
      <div class="col-md-12">
        <div class="main-todo-input-wrap">
          <div class="main-todo-input fl-wrap todo-listing">
            <ul id="list-items">{tasksList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(TasksList);
