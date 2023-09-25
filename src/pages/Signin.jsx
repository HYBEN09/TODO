import { useDocumentTitle } from '@/hooks/index';
import { SigninForm } from '@/components/Auth/SigninForm';

function Signin() {
  useDocumentTitle('TODO | 로그인');

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
