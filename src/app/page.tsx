"use client";

import Button from "@/app/ui/components/Button";
import styles from "@/app/index.module.css";
import Link from "next/link";

export default function Home() {
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
