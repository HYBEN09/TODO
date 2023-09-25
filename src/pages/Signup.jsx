import { SignupForm } from '@/components/Auth/SignupForm';

function Signup() {
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
