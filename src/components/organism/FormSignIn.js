"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../atoms/Input";
import Form from "../molecules/Form";
import Button from "../atoms/Button";

export default function FormSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    console.log("SignIn result:", result);

    if (result.error) {
      console.error("Error during sign in:", result.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input
          name="username"
          placeholder="Username / Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link href="#" className="text-customBlue text-sm font-inter font-medium">
        Lupa Password?
      </Link>
      <Button type="submit">Sign In</Button>
      <span className="font-inter font-medium text-center block mt-8 text-sm">
        Butuh buat akun?{" "}
        <Link href="#" className="text-customBlue">
          Daftar di sini
        </Link>
      </span>
    </Form>
  );
}
