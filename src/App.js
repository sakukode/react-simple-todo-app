import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;