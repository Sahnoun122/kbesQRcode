"use client";

import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Globe, Clock, Share2, Leaf, ExternalLink, ChevronRight } from "lucide-react";

export default function KbesDigitalCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "KBES - Carte Digitale",
          text: "Découvrez KBES, produits vivants issus de la chimie naturelle.",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Erreur de partage:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier !");
    }
  };

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Route nationale N°1 vers Sidi Bibi, Rond-point Ait Mimoun, Chtouka Ait Baha, 80050 Ait Amira, Maroc"
  )}`;

  return (
    <div 
      className={`w-full max-w-md mx-auto min-h-screen text-slate-200 flex flex-col transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header Profile Section */}
      <div className="flex flex-col items-center pt-12 pb-8 px-6 animate-in slide-in-from-bottom-2 duration-700 fade-in fill-mode-both">
        {/* Logo Circle */}
        <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 p-1 mb-5 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
            <Leaf className="w-12 h-12 text-emerald-400" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white tracking-wide mb-2">KBES</h1>
        <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-6">Chimie Naturelle</p>

        {/* Quick Actions Bar */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href="tel:0528818210"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 transition-all duration-300 shadow-lg">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-medium text-slate-400">Appeler</span>
          </a>

          <a
            href="mailto:ste.kbes@gmail.com"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 transition-all duration-300 shadow-lg">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-medium text-slate-400">Email</span>
          </a>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 transition-all duration-300 shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-medium text-slate-400">Itinéraire</span>
          </a>
        </div>

        {/* Description */}
        <p className="text-center text-[15px] leading-relaxed text-slate-300 px-2 font-light">
          KBES développe et commercialise des produits vivants issus de la chimie naturelle, conçus pour améliorer le bien-être et respecter les équilibres naturels.
        </p>
      </div>

      {/* Main Info Card */}
      <div className="flex-1 px-4 pb-12 w-full animate-in slide-in-from-bottom-4 duration-700 delay-200 fade-in fill-mode-both">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-2 shadow-2xl">
          <div className="grid gap-1">
            
            {/* Phone Info */}
            <a href="tel:0528818210" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Téléphone</p>
                <p className="text-slate-200 font-medium text-[15px] truncate">05.28.81.82.10</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Email Info */}
            <a href="mailto:ste.kbes@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                <p className="text-slate-200 font-medium text-[15px] truncate">ste.kbes@gmail.com</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Website Info */}
            <a href="https://kbes.bio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Site Web</p>
                <p className="text-slate-200 font-medium text-[15px] truncate">kbes.bio</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Address Info */}
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Adresse</p>
                <p className="text-slate-200 font-medium text-[14px] leading-snug">
                  Route nationale N°1 vers Sidi Bibi,<br />
                  Rond-point Ait Mimoun,<br />
                  Chtouka Ait Baha, 80050<br />
                  Ait Amira, Maroc
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-emerald-500 transition-colors self-start mt-1" />
            </a>

            {/* Hours Info */}
            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-800/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Horaires</p>
                <p className="text-slate-200 font-medium text-[14px]">Du lundi au samedi</p>
                <p className="text-emerald-400 font-medium text-[14px]">08h00 – 18h00</p>
              </div>
            </div>

          </div>
        </div>

        {/* Share Button */}
        <button 
          onClick={handleShare}
          className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(16,185,129,0.2)] transition-all duration-300 active:scale-[0.98]"
        >
          <Share2 className="w-5 h-5" />
          Partager cette carte
        </button>

        {/* Footer */}
        <div className="mt-12 mb-6 text-center">
          <p className="text-slate-500 text-xs font-medium tracking-widest">© {new Date().getFullYear()} KBES</p>
        </div>
      </div>
    </div>
  );
}
