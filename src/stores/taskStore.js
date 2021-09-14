import tasksData from '../tasksData';
import { makeObservable, observable, action } from 'mobx';
class TaskStore {
  tasks = tasksData;

  constructor() {
    makeObservable(this, {
      tasks: observable,
      createTask: action,
      deleteTask: action,
    });
  }

  createTask = (task) => {
    task.id = this.tasks[this.tasks.length - 1].id + 1;
    this.tasks.push(task);
  };
  deleteTask = (taskId) => {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  };
}

const taskStore = new TaskStore();
export default taskStore;
