import { Component } from '@angular/core';

interface TodoItem {
  id: number;
  body: string;
}

interface Todo extends TodoItem {
  items?: TodoItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];

  addTodo(): void {
    const id = this.todos.length;
    const body = `todo number ${id}`;
    this.todos = [...this.todos, { id, body }];
  }

  addTodoItem(todoId: number): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id !== todoId) {
        return todo;
      }
      const id = todo.items?.length || 0;
      const body = `todo number ${todo.id} item number ${id}`;
      return {
        ...todo,
        items: [...(todo.items || []), { id, body }],
      };
    });
  }
}
