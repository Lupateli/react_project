import LoginForm from "../../components/Login/LoginForm.jsx";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 flex items-center justify-center p-4">
        <LoginForm />
      </main>
    </div>
  );
}