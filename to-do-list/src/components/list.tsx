import { ChangeEvent, useMemo, useState } from 'react';
import TodoMdoel from '../model/todo.model';
import './list.css';
import ToDoItem from './todo-item';

interface Props {
  todos: TodoMdoel[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}
export default function List({ todos, onUpdate, onDelete }: Props) {
  const [search, setSearch] = useState<string>('');

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredTodos = useMemo(() => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, todos]);

  return (
    <div className="List">
      <h4>Todo List 🌞</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
