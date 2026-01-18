import Signup from "../../components/Signup/Signup.jsx";
import "../Home/style.css";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <main className="flex-1 flex items-center justify-center p-4">
        <Signup />
      </main>
    </div>
  );
}