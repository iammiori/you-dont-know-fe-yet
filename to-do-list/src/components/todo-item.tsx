import { memo } from 'react';
import TodoModel from '../model/todo.model';
import './todo-item.css';

interface Props {
  todo: TodoModel;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}
function ToDoItem({ todo, onUpdate, onDelete }: Props) {
  const { id, isDone, content, date } = todo;

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="contents">{content}</div>
      <div className="date">{date.toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}

const MemoizedTodoItem = memo(ToDoItem);
export default MemoizedTodoItem;
