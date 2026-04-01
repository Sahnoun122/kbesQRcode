import { redirect } from "next/navigation";

export default function Home() {
  // Rediriger la page d'accueil vers le profil public
  redirect("/kbes-info");
}



