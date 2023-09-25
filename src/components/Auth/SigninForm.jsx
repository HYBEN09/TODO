import { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useAuth } from '@/context/AuthContext';
import { useNavigation } from '@/hooks/index.js';

export function SigninForm() {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const { signin } = useAuth();
  const { navigateTodo } = useNavigation();
  const { email, password } = userInputs;

  const saveUserInputs = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signinWithForm = async () => {
    try {
      await signin(email, password);
      setUserInputs({
        email: '',
        password: '',
      });
      navigateTodo();
    } catch (error) {
      alert('🚫 로그인 실패:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signinWithForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={saveUserInputs}
        required
        label="이메일"
      />

      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={saveUserInputs}
        required
        label="비밀번호"
      />

      <div className="text-center">
        <Button
          type="submit"
          data-testid="signin-button"
          className="bg-sky-500 text-white font-semibold py-3 px-10 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
        >
          로그인
        </Button>
      </div>
    </form>
  );
}
