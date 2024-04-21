import './editor.css';

export default function Editor() {
  return (
    <div className="Editor">
      <input placeholder="새로운 ToDo..." />
      <button>추가</button>
    </div>
  );
}
