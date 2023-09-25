import { SigninForm } from '@/components/Auth/SigninForm';

function Signin() {
  return (
    <section className="min-h-custom bg-sky-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="container-box">
        <h2 className="title">로그인</h2>
        <SigninForm />
      </div>
    </section>
  );
}

export default Signin;
