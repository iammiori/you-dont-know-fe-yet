import TodoMdoel from '../model/todo.model';
import './todo-item.css';

interface Props {
  todo: TodoMdoel;
}
export default function ToDoItem({ todo }: Props) {
  const { isDone, content, date } = todo;
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} readOnly />
      <div className="contents">{content}</div>
      <div className="date">{date.toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
}
