import './todo-item.css';

export default function ToDoItem() {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="contents">To do.. </div>
      <div className="date">Date</div>
      <button>삭제</button>
    </div>
  );
}
