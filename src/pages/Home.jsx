import { useDocumentTitle } from '../hooks';

function Home() {
  useDocumentTitle('TODOLIST');

  return (
    <div className="min-h-custom bg-sky-100 dark:bg-gray-800 flex justify-center items-center">
      <img src="/assets/pre-oneboarding.png" alt="" width={800} />
    </div>
  );
}

export default Home;
