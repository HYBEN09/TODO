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

  return { navigateHome, navigateSignin, navigateSignup };
};
