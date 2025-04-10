import React, { useContext, useState } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { baseUrl, setLoggedIn } = useContext(AdminContext);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function clearForm() {
    setUser({
      email: "",
      password: "",
    });
  };
  async function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const { email, password } = user;
    try {
      const { data } = await axios.post(`${baseUrl}/api/admin/login`, {
        email,
        password,
      });
      const { success, message } = data;
      if (!success) {
        setError(message);
        setLoading(false);
        return clearForm();
      }
      toast.success(message);
      setLoading(false);
      setLoggedIn(true);
      navigate("/")
      setTimeout(() => navigate("/"), 1000);
      clearForm();
    } catch (ex) {
      toast.error(ex.message);
      console.log(ex);
    }
  }
  return (
    <div onSubmit={handleFormSubmit} className="grid place-items-center my-32 ">
      <div>
        <form
          action="#"
          className="border h-[300px] lg:h-[350px] bg-gray-50 rounded-sm border-gray-200 p-5 w-sm"
        >
          <h1 className="text-2xl md:text-3xl text-center mb-8 mt-3  font-medium text-red-700">
            Login
          </h1>
          <div className="border mb-3 px-2 py-1 border-gray-200 rounded-sm shadow-sm">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="text"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
              placeholder="admin@email.com"
              required
              autoComplete="email"
              className="border-none outline-none "
            />
          </div>
          <div className="border px-2 py-1 border-gray-200 rounded-sm shadow-sm">
            <label htmlFor="email" className="sr-only">
              Password
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
              placeholder="password"
              required
              autoComplete="password"
              className="border-none outline-none "
            />
          </div>
          <button
            type="submit"
            className="w-full mt-5 rounded-sm cursor-pointer hover:bg-red-300 shadow-sm py-1 bg-red-200 text-red-800 font-medium"
          >
            {isLoading ? "Please wait....." : "Login"}
          </button>
          <p className="text-sm text-center mt-2 text-red-400">{error}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
