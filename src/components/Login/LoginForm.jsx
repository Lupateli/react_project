import Input from "./UI/Input";

export default function LoginForm() {
  return (
    <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
      
      <Input 
        id="email"
        label="E-mail"
        type="email"
        placeholder="your@email.com"
        required
      />

      <Input 
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        required
      />

      <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Enter
      </button>
      
      <p className="text-sm text-center text-gray-600">
        Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
      </p>
    </form>
  );
}