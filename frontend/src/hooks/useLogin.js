import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      //Update localStroage- To check if member is logged in or not
      localStorage.setItem("chat-user", JSON.stringify(data));
      //Update context- So data will be available throughout application
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
