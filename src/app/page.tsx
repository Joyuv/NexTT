import Button from "@/app/ui/components/Button";
import styles from "@/app/index.module.css";

export default function Home() {
  //botões de teste
  return (
    <div className={styles.centra}>
      <Button>Opa</Button>
      <Button>Como</Button>
      <Button>Vai?</Button>
    </div>
  );
}
