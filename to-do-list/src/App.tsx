import { useRef, useState } from 'react';
import './App.css';
import Editor from './components/editor';
import Header from './components/header';
import List from './components/list';
import TodoMdoel from './model/todo.model';

const mockData: TodoMdoel[] = [
  {
    id: 0,
    isDone: false,
    content: 'react 공부하기',
    date: new Date(),
  },
  {
    id: 1,
    isDone: false,
    content: '수영 가기',
    date: new Date(),
  },
  {
    id: 2,
    isDone: false,
    content: '러닝',
    date: new Date(),
  },
];

function App() {
  const [todos, setTodos] = useState<TodoMdoel[]>(mockData);
  const idRef = useRef<number>(3);

  const onCreate = (content: string) => {
    const newTodo: TodoMdoel = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
