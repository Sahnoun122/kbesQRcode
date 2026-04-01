import KbesDigitalCard from "../components/KbesDigitalCard";

export const metadata = {
  title: "KBES - Carte Digitale",
  description: "KBES développe et commercialise des produits vivants issus de la chimie naturelle, conçus pour améliorer le bien-être.",
};

export const viewport = {
  themeColor: "#020617", // slate-950
};

export default function DigitalCardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <main className="w-full flex justify-center overflow-x-hidden p-2 sm:p-4 md:p-6 lg:p-8">
        <KbesDigitalCard />
      </main>
    </div>
  );
}
