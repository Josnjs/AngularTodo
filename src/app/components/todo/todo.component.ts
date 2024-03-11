import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: { text: string; done: boolean }[] = [];
  editingTodoIndex: number | null = null;

  addTodo(todoText: string) {
    if (todoText.trim() !== '') {
      this.todos.unshift({ text: todoText, done: false });
    }
  }
  toggleTodoStatus(todo: { text: string; done: boolean }) {
    todo.done = !todo.done;
  }
  startEditing(index: number) {
    this.editingTodoIndex = index;
  }

  cancelEditing() {
    this.editingTodoIndex = null;
  }

  updateTodo(updatedText: string, index: number) {
    this.todos[index].text = updatedText;
    this.cancelEditing();
  }
  removeTodo(todo: { text: string; done: boolean }) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
