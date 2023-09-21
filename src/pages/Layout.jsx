import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
