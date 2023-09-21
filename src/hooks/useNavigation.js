import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateSignin = () => {
    navigate('/signin');
  };

  const navigateSignup = () => {
    navigate('/signup');
  };

  const navigateTodo = () => {
    navigate('/todo');
  };

  return { navigateHome, navigateSignin, navigateSignup, navigateTodo };
};
