import KbesQrCard from "./components/KbesQrCard";

export const metadata = {
  title: "KBES - Générateur QR",
  description: "Page de génération du QR Code KBES pour la carte digitale.",
};

export const viewport = {
  themeColor: "#fdfbf7",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] flex items-center justify-center p-6 sm:p-12 font-sans selection:bg-stone-200">
      <main className="w-full max-w-xl mx-auto flex flex-col items-center">
        <KbesQrCard />
        
        <footer className="mt-8 text-center print:hidden">
          <p className="text-stone-400 text-sm font-medium tracking-wide">© {new Date().getFullYear()} KBES. Tous droits réservés.</p>
        </footer>
      </main>
    </div>
  );
}


