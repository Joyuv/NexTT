import styles from "@/app/index.module.css";
import H1 from "@/app/ui/components/H1";
import Link from "next/link";
import Button from "@/app/ui/components/Button";

// Trocar ancora por next Link
export default function Page() {
  return (
    <div className={styles.centra}>
      <H1>Em construção</H1>
      <Link className="pointer" href="/">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
}
