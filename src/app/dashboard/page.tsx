import H1 from "@/app/ui/components/H1";
import styles from "@/app/index.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <div className={`${styles.centra}`}>
      <H1>Em construção</H1>
    </div>
  );
}
