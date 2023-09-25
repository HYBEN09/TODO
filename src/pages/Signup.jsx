import { SignupForm } from '@/components/Auth/SignupForm';
import { useDocumentTitle } from '../hooks';

function Signup() {
  useDocumentTitle('TODO | 회원가입');

  return (
    <section className="main">
      <div className="container-box">
        <h2 className="title">회원가입</h2>
        <SignupForm />
      </div>
    </section>
  );
}

export default Signup;
