"use server";

import H1 from "@/app/ui/components/H1";
import Link from "next/link";
import styles from "@/app/index.module.css";
import Button from "@/app/ui/components/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions)
  if(!session){
    return redirect('/')
  } 
  const nameowner = session.user?.name
  async function handleSubmit(formData: FormData) {
    "use server";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    await fetch(`${baseUrl}/api/campaign/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        nameowner: nameowner,
      }),
    });
  } 

  return (
    <div className={styles.centra}>
      <form
        action={handleSubmit}
        className={`${styles.form} rounded-xl flex flex-col gap-2`}
      >
        <H1>Adicionar Campanha</H1>
        <input type="text" name="name" placeholder="Nome..." />
        <input type="text" name="description" placeholder="Descrição..." />
        <button className="rounded cursor-pointer" type="submit">
          Adicionar
        </button>
      </form>
      <Link href="/" className="pointer">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
}
