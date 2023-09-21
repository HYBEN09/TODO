import { useState } from 'react';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import { useValidation } from '@/hooks/index';
import { useAuth } from '@/context/AuthContext';

function Signup() {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInputs;
  const { signup } = useAuth();

  const { emailValid, passwordValid, validateEmail, validatePassword } =
    useValidation();

  const saveUserInputs = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email') {
      validateEmail(value);
    } else if (name === 'password') {
      validatePassword(value);
    }
  };

  const signupWithForm = () => {
    if (emailValid && passwordValid) {
      signup(email, password);
    } else {
      alert('이메일과 비밀번호를 올바르게 입력하세요.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs);
  };

  return (
    <div className="min-h-custom bg-sky-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="container-box">
        <h2 className="title">회원가입</h2>
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            name="email"
            type="email"
            label="이메일"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={saveUserInputs}
            required
            error={emailValid ? '' : '올바른 이메일 형식이 아닙니다.'}
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={saveUserInputs}
            required
            error={passwordValid ? '' : '비밀번호는 8자 이상이어야 합니다.'}
          />
          <div className="text-center">
            <Button
              type="submit"
              data-testid="signup-button"
              onClick={signupWithForm}
              disabled={!emailValid || !passwordValid}
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
