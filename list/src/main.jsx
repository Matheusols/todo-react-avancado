import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { TodoProvider } from './context/TodoContext.jsx';

const root = document.getElementById('root')

createRoot(root).render(
    <TodoProvider>
        <App />
    </TodoProvider>
)
