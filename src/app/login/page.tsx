"use client";

import styles from "@/app/index.module.css";
import H1 from "@/app/ui/components/H1";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

// Trocar ancora por next Link
export default function Page() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false, // não redireciona automaticamente
    });

    if (res?.error) {
      setError("Email e ou senha inválidos");
    } else {
      router.push("/dashboard");
    }
  }
  return (
    <div className={styles.centra}>
      <form
        onSubmit={handleSubmit}
        className={`${styles.form} rounded-xl flex flex-col gap-2`}
      >
        <H1>Login</H1>
        <input type="email" name="email" placeholder="Email..." />
        <input type="password" name="password" placeholder="Senha..." />
        <button className="rounded cursor-pointer" type="submit">
          Entrar
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
