import H1 from "@/app/ui/components/H1";
import styles from "@/app/ui/components/card/Card.module.css";

export default function Card({
  titulo,
  descricao,
}: {
  titulo: string;
  descricao: string;
}) {
  return (
    <div className={`${styles.card} rounded flex flex-col items-center`}>
      <div>
        <H1>{titulo}</H1>
      </div>
      <hr className="w-11/12" />
      <p className="self-start">{descricao}</p>
    </div>
  );
}
