import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { LocalStorage } from './storage/LocalStorage';
import { HttpClientImpl } from './httpClient/httpClient';
import { AuthServiceImpl } from './services/AuthService';
import { LocalTodoService } from './services/TodoService';
import { TodoProvider } from './context/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const storage = new LocalStorage();
const httpClient = new HttpClientImpl(
  'https://www.pre-onboarding-selection-task.shop/',
  storage
);
const authService = new AuthServiceImpl(httpClient, storage);
const todoService = new LocalTodoService(httpClient);

root.render(
  <>
    <AuthProvider authService={authService}>
      <TodoProvider todoService={todoService}>
        <App />
      </TodoProvider>
    </AuthProvider>
  </>
);
