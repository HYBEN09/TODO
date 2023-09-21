import Button from '@/components/UI/Button';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Signup() {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInputs;
  const { signup } = useAuth();

  const saveUserInputs = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupWithForm = () => {
    signup(email, password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs);
  };

  return (
    <div className="min-h-custom bg-sky-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="bg-white dark:bg-slate-600 rounded-lg shadow-md p-10 max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-10 text-center">
          회원가입
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={saveUserInputs}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={saveUserInputs}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              data-testid="signup-button"
              onClick={signupWithForm}
              className="bg-sky-500 text-white font-semibold py-3 px-10 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
            >
              회원가입
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
