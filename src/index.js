import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { TokenStorage } from './storage/TokenStorage';
import { HttpClientImpl } from './httpClient/httpClient';
import { AuthServiceImpl } from './services/AuthService';
import { LocalTodoService } from './services/TodoService';
import { TodoProvider } from './context/TodoContext';
import { TodoStorage } from './storage/TodoStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const baseUrl = process.env.REACT_APP_BASE_URL;

const tokenStorage = new TokenStorage();
const todoStorage = new TodoStorage();

const httpClient = new HttpClientImpl(baseUrl, tokenStorage);
const authService = new AuthServiceImpl(httpClient, tokenStorage);
const todoService = new LocalTodoService(todoStorage);

root.render(
  <>
    <AuthProvider authService={authService}>
      <TodoProvider todoService={todoService}>
        <App />
      </TodoProvider>
    </AuthProvider>
  </>
);
