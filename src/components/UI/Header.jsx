import { useDarkMode, useNavigation } from '@/hooks/index';
import Button from './Button';

function Header() {
  const { toggleDarkMode, isDarkModeOn } = useDarkMode();
  const { navigateHome, navigateSignin, navigateSignup } = useNavigation();

  return (
    <header className="text-gray-600 dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center dark:bg-gray-900">
        <button
          onClick={navigateHome}
          className="flex items-center justify-center"
        >
          <img src="/assets/logo.svg" alt="로고" width={40} height={40} />
          <p className="font-bold pl-4 pt-1 text-2xl">TODO LIST</p>
        </button>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Button type="button" onClick={navigateSignin} className="bg-sky-100">
            로그인
          </Button>
          <Button type="button" onClick={navigateSignup} className="bg-sky-100">
            회원가입
          </Button>

          <Button
            type="button"
            onClick={toggleDarkMode}
            className="bg-gray-200"
          >
            {isDarkModeOn ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
