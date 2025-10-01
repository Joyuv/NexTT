"use client";

import Button from "@/app/ui/components/Button";
import styles from "@/app/index.module.css";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email: "teste@ex.com",
      password: "123456",
      redirect: false, // não redireciona automaticamente
    });

    console.log(res);
  };

  //botões de teste
  return (
    <div className={styles.centra}>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Link href="/cadastro">
        <Button>Cadastrar</Button>
      </Link>
    </div>
  );
}
