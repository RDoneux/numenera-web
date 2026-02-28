import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import LoginForm, { LoginState, type BasicLogin } from "../fragments/login-form/LoginForm";
import { useEffect, useState } from "react";

export default function Login() {
  const [loginState, setLoginState] = useState<LoginState>(LoginState.NO_ATTEMPT);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfAlreadyLoggedIn = async () => {
      const response = await api.get("/protected/me", {
        validateStatus: () => true,
      });

      if (response.status === 200) {
        setLoginState(LoginState.SUCCESS);
        navigate("/dashboard");
      }
    };

    checkIfAlreadyLoggedIn();
  }, []);

  const handleSubmission = async ({ username, password }: BasicLogin) => {
    setLoginState(LoginState.IN_PROGRESS);

    const response = await api.get("/login", {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
      withCredentials: true,
      validateStatus: () => true, // handle the error manually
    });

    if (response.status === 401) {
      setLoginState(LoginState.FAILURE);
    }

    if (response.status === 200) {
      setLoginState(LoginState.SUCCESS);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center flex-1">
      <LoginForm loginState={loginState} onSubmit={handleSubmission} />
    </div>
  );
}
