import { FormControl, Input, Stack, FormLabel, Button } from "@mui/joy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import NumeneraLogo from "../fragments/NumeneraLogo";

export default function Login() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  const handleSubmission = async () => {
    await api.get("/login", {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
      withCredentials: true,
    });

    navigate("/dashboard");
  };

  return (
    <Stack spacing={2} className="w-[40vw] mx-auto background-contrast px-12 pt-5 pb-8 rounded-md">
      <NumeneraLogo />
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input size="lg" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmission}>Login</Button>
    </Stack>
  );
}
