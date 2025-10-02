import styles from "@/app/ui/components/sidebar/Sidebar.module.css";
import Link from "next/link";
import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  weight: "400",
});

export default function Sidebar() {
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
}
