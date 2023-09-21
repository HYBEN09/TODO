import { useState } from 'react';

// 유효성 검사 기준
const MIN_PASSWORD_LENGTH = 8;

// 이메일 유효성 검사 함수
function isEmailValid(email) {
  return email.includes('@');
}

// 비밀번호 유효성 검사 함수
function isPasswordValid(password) {
  return password.length >= MIN_PASSWORD_LENGTH;
}

// 유효성 검사 훅
export function useValidation() {
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateEmail = (email) => {
    setEmailValid(isEmailValid(email));
  };

  const validatePassword = (password) => {
    setPasswordValid(isPasswordValid(password));
  };

  return {
    emailValid,
    passwordValid,
    validateEmail,
    validatePassword,
  };
}
