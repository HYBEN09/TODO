import { useNavigation } from '@/hooks/index';

function Footer() {
  const { navigateHome } = useNavigation();

  return (
    <footer className="text-gray-600 body-font dark:bg-gray-900">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <button
          onClick={navigateHome}
          className="flex font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img src="/assets/logo.svg" alt="로고" width={40} height={40} />
          <p className="font-bold pl-4 pt-1 text-2xl">TODO LIST</p>
        </button>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright © 2023 Hyebeen - All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
