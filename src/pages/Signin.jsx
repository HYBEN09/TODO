import { SigninForm } from '@/components/Auth/SigninForm';

function Signin() {
  return (
    <section className="main">
      <div className="container-box">
        <h2 className="title">로그인</h2>
        <SigninForm />
      </div>
    </section>
  );
}

export default Signin;
