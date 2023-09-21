import Button from '@/components/UI/Button';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useValidation } from '@/hooks/index';

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
              className={`w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400 ${
                emailValid ? '' : 'border-red-500'
              }`}
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={saveUserInputs}
            />
            {/* 추가: 이메일 유효성 오류 메시지 */}
            {!emailValid && (
              <p className="text-red-500 text-sm mt-1">
                올바른 이메일 형식이 아닙니다.
              </p>
            )}
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
              className={`w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400 ${
                passwordValid ? '' : 'border-red-500'
              }`}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={saveUserInputs}
            />
            {/* 추가: 비밀번호 유효성 오류 메시지 */}
            {!passwordValid && (
              <p className="text-red-500 text-sm mt-1">
                비밀번호는 8자 이상이어야 합니다.
              </p>
            )}
          </div>
          <div className="text-center">
            <Button
              type="submit"
              data-testid="signup-button"
              onClick={signupWithForm}
              // 추가: 이메일 또는 비밀번호가 유효하지 않으면 버튼 비활성화
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
