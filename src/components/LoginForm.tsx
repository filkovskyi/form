import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginSuggestions = ["user", "user1", "user2", "user3"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    // Emulate API POST request with a delay
    setTimeout(() => {
      if (login === "user" && password === "password") {
        setIsLoading(false);
        console.log("Logged in successfully");
        toast.success("Logged in successfully");
      } else {
        setIsLoading(false);
        toast.error("Invalid credentials");
      }
    }, 2000);
  };

  useEffect(() => {
    if (login === "") {
      setError("Username cannot be empty");
    } else if (password === "") {
      setError("Password cannot be empty");
    } else {
      setError("");
    }
  }, [login, password]);

  useEffect(() => {
    if (login === "" && password === "") {
      setError("");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <div className="mb-4 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="login"
        >
          Login
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="login"
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          autoComplete="username"
          list="loginSuggestions"
          required
        />
        <datalist
          id="loginSuggestions"
          className="absolute z-10 w-full bg-white border rounded-b border-t-0"
        >
          {loginSuggestions.map((suggest, index) => (
            <option
              key={index}
              className="cursor-pointer p-2 hover:bg-blue-500 hover:text-white"
              value={suggest}
            />
          ))}
        </datalist>
      </div>
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={(e: React.FormEvent) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? `❌ ` : `👁️`}
          </button>
        </div>
      </div>
      {error && (
        <div className="flex mb-4">
          <p className="text-red-500 text-xs italic">{error}</p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <button
          className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:cursor-not-allowed"
          type="submit"
          disabled={login === "" || password === ""}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Sign In"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
