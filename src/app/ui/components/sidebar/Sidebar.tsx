import styles from "@/app/ui/components/sidebar/Sidebar.module.css";
import Link from "next/link";
import { Courier_Prime } from "next/font/google";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import H1 from "../H1";

const courierPrime = Courier_Prime({
  weight: "400",
});

export default function Sidebar() {
  const [nome, setNome] = useState("");
  const { data: session } = useSession();

  function deslogar() {
    signOut();
    redirect("/");
  }

  useEffect(() => {
    if (!session) {
      setNome("Unknown");
    } else {
      if (String(session.user?.name) === "undefined") {
        setNome(String("Anônimo"));
      }
      setNome(String(session.user?.name));
    }
  }, [session]);

  if (!session) {
    return (
      <div
        className={`${styles.sidebar} ${courierPrime.className} rounded-r-3xl text-2xl flex flex-col gap-1 items-center`}
      >
        <Link href="/login">Login</Link>
        <Link href="/cadastro">Cadastro</Link>
        <hr className="w-10/12" />
        <Link href="/dashboard">Dashboard</Link>
      </div>
    );
  } else {
    return (
      <div
        className={`${styles.sidebar} ${courierPrime.className} rounded-r-3xl text-2xl flex flex-col gap-1 items-center`}
      >
        <H1>{nome}</H1>
        <hr className="w-10/12" />
        <Link href="/dashboard">Dashboard</Link>
        <button onClick={deslogar}>Deslogar</button>
      </div>
    );
  }
}
