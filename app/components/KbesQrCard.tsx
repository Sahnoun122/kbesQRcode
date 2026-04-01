"use client";

import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { Globe, MapPin, Phone, Clock, Download, Printer, Copy } from "lucide-react";

export default function KbesQrCard() {
  const qrRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    // On Load callback
    img.onload = () => {
      // Setup canvas dimension with padding
      const width = svg.clientWidth || 256;
      const height = svg.clientHeight || 256;
      const padding = 20;

      canvas.width = width + padding * 2;
      canvas.height = height + padding * 2;

      // Fill background
      if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, padding, padding, width, height);

        // Standard PNG download
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "KBES_QRCode.png";
        downloadLink.href = pngFile;
        downloadLink.click();
      }
    };

    // Serialize SVG and encode to base64
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  const copyAddress = () => {
    navigator.clipboard.writeText("Route nationale N°1 vers Sidi Bibi, Rond-point Ait Mimoun, Chtouka Ait Baha, 80050 Ait Amira, Maroc");
  };

  return (
    <div className="w-full max-w-[440px] mx-auto bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] print:shadow-none print:border-none duration-500 animate-in fade-in zoom-in-95 ease-out">
      {/* Header */}
      <div className="pt-10 pb-6 px-8 text-center bg-gradient-to-b from-stone-50/80 to-white print:from-white">
        <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 mb-1">KBES</h1>
        <p className="text-sm text-stone-500 font-medium tracking-wide uppercase">Informations de l'entreprise</p>
      </div>

      <div className="px-8 pb-10">
        {/* QR Code Section */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div 
            ref={qrRef}
            className="bg-white p-5 rounded-3xl shadow-sm border border-stone-100 mb-4 transition-transform hover:scale-[1.02] duration-300"
          >
            <QRCode
              value="https://kbes-q-rcode.vercel.app/"
              size={180}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
              bgColor="#ffffff"
              fgColor="#1c1917" // stone-900
            />
          </div>
          <p className="text-[13px] text-stone-400 font-medium">Scannez pour accéder à la carte digitale</p>
          
          {/* Action buttons */}
          <div className="flex gap-3 mt-6 w-full print:hidden">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-2xl text-[13px] font-semibold transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 rounded-2xl text-[13px] font-semibold transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-200"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer</span>
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-stone-100 w-full mb-8"></div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="grid gap-6">
            
            {/* Website */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-stone-50/80 text-stone-400 rounded-2xl group-hover:bg-stone-100 group-hover:text-stone-700 transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <div className="pt-0.5">
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-1">Site web</p>
                <a href="https://kbes.bio/" target="_blank" rel="noopener noreferrer" className="text-stone-800 text-sm font-semibold hover:text-stone-500 transition-colors">
                  kbes.bio
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-stone-50/80 text-stone-400 rounded-2xl group-hover:bg-stone-100 group-hover:text-stone-700 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="pt-0.5">
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-1">Téléphone</p>
                <a href="tel:0528818210" className="text-stone-800 text-sm font-semibold hover:text-stone-500 transition-colors flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  05 28 81 82 10
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-stone-50/80 text-stone-400 rounded-2xl group-hover:bg-stone-100 group-hover:text-stone-700 transition-colors mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 pt-0.5">
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-1">Adresse</p>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-stone-600 text-[13px] font-medium leading-relaxed">
                    Route nationale N°1 vers Sidi Bibi,<br />
                    Rond-point Ait Mimoun,<br />
                    Chtouka Ait Baha,<br />
                    80050 Ait Amira, Maroc
                  </p>
                  <button 
                    onClick={copyAddress}
                    className="p-1.5 text-stone-300 hover:text-stone-600 hover:bg-stone-100 rounded-lg transition-colors print:hidden"
                    title="Copier l'adresse"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-stone-50/80 text-stone-400 rounded-2xl group-hover:bg-stone-100 group-hover:text-stone-700 transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <div className="pt-0.5">
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-1">Horaires</p>
                <p className="text-stone-600 text-[13px] font-medium">Du lundi au samedi : 08h00 – 18h00</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 border-dashed">
            <p className="text-stone-500 text-[13px] leading-relaxed text-center font-medium">
              Nous produisons, distribuons et commercialisons des produits vivants issus de la chimie naturelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
