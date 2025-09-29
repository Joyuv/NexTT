import styles from "@/app/ui/components/Button.module.css";
import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  weight: "400",
});

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${courierPrime.className} ${styles.botao} rounded-full flex justify-center items-center text-2xl flex-grow-0 select-none`}
    >
      <p>{children}</p>
    </div>
  );
}
