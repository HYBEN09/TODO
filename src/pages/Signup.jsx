import { SignupForm } from '@/components/Auth/SignupForm';

function Signup() {
  return (
    <section className="min-h-custom bg-sky-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="container-box">
        <h2 className="title">회원가입</h2>
        <SignupForm />
      </div>
    </section>
  );
}

export default Signup;
