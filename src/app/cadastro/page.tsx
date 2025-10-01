import styles from "@/app/index.module.css";
import H1 from "@/app/ui/components/H1";
import Link from "next/link";
import Button from "@/app/ui/components/Button";

export default function Page() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const res = await fetch(`${baseUrl}/api/auth/cadastro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    });
    return { sucess: true };
  }
  return (
    <div className={styles.centra}>
      <form
        action={handleSubmit}
        className={`${styles.form} rounded-xl flex flex-col gap-2`}
      >
        <input type="email" name="email" placeholder="Email..." />
        <input type="password" name="password" placeholder="Senha..." />
        <input type="text" name="username" placeholder="Nome..." />
        <button className="rounded cursor-pointer" type="submit">
          Cadastrar
        </button>
      </form>
      <Link href="/" className="pointer">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
}
