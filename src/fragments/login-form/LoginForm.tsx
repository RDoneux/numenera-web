import { FormControl, Input, Stack, FormLabel, Button, Typography } from "@mui/joy";
import NumeneraLogo from "../NumeneraLogo";
import { useMemo, useRef, useState } from "react";
import ErrorFormHelperText from "../styled-form-components/ErrorFormHelperText";
import type { SubmitEvent } from "react";

export type BasicLogin = {
  username: string;
  password: string;
};

export const LoginState = {
  SUCCESS: "Login successful",
  FAILURE: "Incorrect username or password",
  NO_ATTEMPT: undefined,
  IN_PROGRESS: "Logging in...",
} as const;
export type LoginState = (typeof LoginState)[keyof typeof LoginState];

interface LoginFormProps {
  loginState: LoginState;
  onSubmit: (basicLogin: BasicLogin) => void;
}

export default function LoginForm({ loginState, onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [usernameError, setUsernameError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

  const lastLoginAttempt = useRef<BasicLogin>({ username: "", password: "" });

  const validateAndHandleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    let valid = true;
    setUsernameError(undefined);
    setPasswordError(undefined);

    if (!username) {
      setUsernameError("Username is required");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      lastLoginAttempt.current = { username, password };
      onSubmit({ username, password });
    }
  };

  /**
   * Disabled if:
   *    - loginState is failure and username or password have not changed
   *    - login state is in progress
   *    - username or password are undefined
   */
  const isSubmitDisabled = useMemo(() => {
    const failedAndUnchanged =
      loginState === LoginState.FAILURE && username === lastLoginAttempt.current.username && password === lastLoginAttempt.current.password;
    return !username || !password || loginState === LoginState.IN_PROGRESS || failedAndUnchanged;
  }, [username, password, loginState]);

  const isInProgress = useMemo(() => {
    return loginState === LoginState.IN_PROGRESS;
  }, [loginState]);

  return (
    <form onSubmit={validateAndHandleSubmit}>
      <Stack spacing={2} className="w-[40vw] mx-auto background-contrast px-12 pt-5 pb-8 rounded-md">
        <NumeneraLogo />
        <Typography className="text-center !mt-0 !mb-5" level="body-sm">
          Character Manager
        </Typography>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input size="lg" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
          <ErrorFormHelperText value={usernameError} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <ErrorFormHelperText value={passwordError} />
        </FormControl>
        <FormControl>
          <Button variant="solid" type="submit" disabled={isSubmitDisabled}>
            {isInProgress ? "Logging In" : "Login"}
          </Button>
          {!isInProgress && <ErrorFormHelperText value={loginState} />}
        </FormControl>
      </Stack>
    </form>
  );
}
