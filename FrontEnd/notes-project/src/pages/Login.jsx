import { useState } from "react";
import { Link } from "react-router-dom";
import { isEmailValid } from "../utils/isEmailValid";
import InputField from "../components/InputField";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    console.log("Login successful", { email, password });
    setError(null);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-65px)] px-5 md:px-0">
      <div className="w-full max-w-sm border p-4 md:p-8 space-y-3 border-gray-200 md:shadow-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <InputField
            label="Email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            isPassWordField={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          {error && (
            <p className="text-red-500 bg-red-100 p-2 rounded-md">{error}</p>
          )}
          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer">
            Login
          </button>
          <p className="text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
