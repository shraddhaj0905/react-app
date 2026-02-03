import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: "1", content: "Example todo (local only)" },
  ]);

  function createTodo() {
    const content = window.prompt("Todo content");
    if (content) setTodos((t) => [...t, { id: Date.now().toString(), content }]);
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. This demo uses local state only (no backend).
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
