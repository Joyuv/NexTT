import H1 from "@/app/ui/components/H1";
import Link from "next/link";
import styles from "@/app/index.module.css";
import Button from "@/app/ui/components/Button";

export default function Page() {
  return (
    <div className={styles.centra}>
      <form
        action={async () => {
          "use server";
          alert("opa");
        }}
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
