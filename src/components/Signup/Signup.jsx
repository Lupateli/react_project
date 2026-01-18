import Input from "../UI/Input.jsx";

export default function LoginForm() {
  return (
    <form className="bg-blue-400 p-8 rounded-xl shadow-2xl w-full max-w-md flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center mb-2">Register now</h2>
      
      <Input 
        id="email"
        label="E-mail"
        type="email"
        placeholder="your@email.com"
        required
      />
      <Input 
        id="name"
        label="Name"
        type="text"
        placeholder="your name"
        required
      />

      <Input 
        id="cpg"
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        required
      />

      <Input 
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        required
      />

      <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors">
        Enter
      </button>
      
      <p className="text-sm text-center text-gray-600">
        Have an account? <a href="/Login" className="text-blue-500 hover:underline">Sign in</a>
      </p>
    </form>
  );
}