"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/app/store/slices/authSlice";
import { Button, Input, Card } from "@/app/components";
import { loginSchema, LoginFormData } from "./validation";
import { useState } from "react";
import { RootState } from "../store/store";

const LoginPage = () => {
  const [submitError, setSubmitError] = useState("");
  const users = useSelector((state: RootState) => state.users.data);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    const user = users.find(
      (u) =>
        u.email.toLowerCase() === data.email.toLowerCase() &&
        u.firstName.toLowerCase() === data.username.toLowerCase()
    );
    if (user) {
      dispatch(login({ username: data.username, email: data.email }));
      setSubmitError("");
      reset();
      router.push("/dashboard");
    } else {
      setSubmitError("Invalid Email or Username");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--background, #ffffff)",
        color: "var(--foreground, #171717)",
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      <Card className="w-full max-w-md">
        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "var(--foreground, #171717)",
          }}
        >
          HR Dashboard Login
        </h1>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                label="Username"
                placeholder="Enter your username"
                {...field}
                error={errors.username?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                {...field}
                error={errors.email?.message}
              />
            )}
          />

          {submitError && (
            <p
              style={{
                color: "#ef4444",
                fontSize: "0.875rem",
                textAlign: "center",
              }}
            >
              {submitError}
            </p>
          )}
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
