import H1 from "@/app/ui/components/H1";
import styles from "@/app/index.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserByEmail } from "@/lib/db";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  const user = await getUserByEmail(String(session.user.email));
  return (
    <div>
      <div className={`${styles.centra}`}>
        <H1>{String(user.username)}</H1>
      </div>
    </div>
  );
}
