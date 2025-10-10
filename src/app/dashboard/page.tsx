"use client";

import H1 from "@/app/ui/components/H1";
import styles from "@/app/index.module.css";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Card from "@/app/ui/components/card/Card";
import Link from "next/link";
import Button from "@/app/ui/components/Button";

export default function Page() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      redirect("/");
    }
    setEmail(String(session.user?.email));
    setNome(String(session.user?.name));
  }, [session]);

  type campaigns = {
    id: number;
    name: string;
    description: string;
    owner_id: number;
  };
  const campaigns: campaigns[] = [];

  return (
    <div className="w-full">
      <div className={`${styles.dashboard} flex flex-col items-start gap-52`}>
        <div className="flex flex-col items-start">
          <H1>Usuario: {nome}</H1>
          <H1>Email: {email}</H1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-6">
          <Link href="/campanha/adicionar">
            <Button>Adicionar nova campanha</Button>
          </Link>
          {campaigns.map((campaign) => (
            <Card titulo={campaign.name} descricao={campaign.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
