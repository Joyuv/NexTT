"use client";

import Button from "@/app/ui/components/Button";
import styles from "@/app/index.module.css";
import { signIn } from "next-auth/react";

export default function Home() {
  const handleSignup = async () => {
    const res = await fetch("/api/auth/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "teste@ex.com", senha: "123456" }),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email: "teste@ex.com",
      senha: "123456",
      redirect: false, // não redireciona automaticamente
    });

    console.log(res);
  };

  //botões de teste
  return (
    <div className={styles.centra}>
      <Button>Opa</Button>
      <Button>Como</Button>
      <Button>Vai?</Button>
      <button onClick={() => handleSignup()}>cadastrar teste</button>
      <button onClick={() => handleLogin()}>login teste</button>
    </div>
  );
}
