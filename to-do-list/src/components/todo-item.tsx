import TodoMdoel from '../model/todo.model';
import './todo-item.css';

interface Props {
  todo: TodoMdoel;
  onUpdate: (targetId: number) => void;
}
export default function ToDoItem({ todo, onUpdate }: Props) {
  const { id, isDone, content, date } = todo;

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="contents">{content}</div>
      <div className="date">{date.toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
}
