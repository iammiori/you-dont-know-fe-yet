import './App.css';
import Editor from './components/editor';
import Header from './components/header';
import List from './components/list';

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
