import LoginForm from "./components/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Please Login</h1>
        <LoginForm />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
