import { useCallback, useReducer, useRef } from 'react';
import './App.css';
import Editor from './components/editor';
import Header from './components/header';
import List from './components/list';
import TodoModel from './model/todo.model';

const mockData: TodoModel[] = [
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

type Action = 'CREATE' | 'UPDATE' | 'DELETE';

const reducer = (
  state: TodoModel[],
  action: { type: Action; data?: TodoModel; targetId?: number }
) => {
  switch (action.type) {
    case 'CREATE':
      if (action.data) {
        return [action.data, ...state];
      }
      return state;
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef<number>(mockData.length);

  const onCreate = useCallback((content: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId: number) => {
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId: number) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
