import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

export enum TaskState {
  New,
  Done,
}

export interface Task {
  title: string;
  state: TaskState;
  creationDate: Date;
}

@Component({
  selector: 'app-todolist-page',
  imports: [CommonModule],
  templateUrl: './todolist-page.html',
  styleUrl: './todolist-page.css',
})
export class TodolistPage {
  // TODO LIST
  tasks = signal<Task[]>([
    {
      title: 'Task 0',
      state: TaskState.New,
      creationDate: new Date(),
    },
  ]);
  tasksNew = computed<Task[]>(() =>
    this.tasks().filter((task) => task.state === TaskState.New)
  );
  tasksDone = computed<Task[]>(() =>
    this.tasks().filter((task) => task.state === TaskState.Done)
  );
  totalTasks = computed<number>(() => this.tasks().length);
  tasksNewCount = computed<number>(() => this.tasksNew().length);
  tasksDoneCount = computed<number>(() => this.tasksDone().length);
  readonly TaskState = TaskState;

  createNewTask() {
    this.tasks.update((value) => [
      ...value,
      {
        title: 'Task ' + value.length,
        state: TaskState.New,
        creationDate: new Date(),
      },
    ]);
  }

  markAsDone(title: string) {
    this.tasks.update((value) =>
      value.map((task) =>
        task.title === title ? { ...task, state: TaskState.Done } : task
      )
    );
  }

  markAsUndone(title: string) {
    this.tasks.update((value) =>
      value.map((task) =>
        task.title === title ? { ...task, state: TaskState.New } : task
      )
    );
  }
  removeTask(title: string) {
    this.tasks.update((value) => value.filter((task) => task.title !== title));
  }
}
