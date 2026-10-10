"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { T } from "@/components/i18n";

const PRODUCTS = [
  { name: "Synapgen", image: "/synapgen-3d.png", href: "/products/synapgen", width: 1080, height: 1080 },
  { name: "Synapgen Relax", image: "/synapgen-relax.png", href: "/products/synapgen-relax", width: 1303, height: 1207 },
];

export default function ProductCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const update = () => setPageHidden(document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!playing || interacting || reducedMotion || pageHidden) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % PRODUCTS.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, interacting, reducedMotion, pageHidden, active]);

  return (
    <div
      className="product-stage panel-tint flex-col px-5 py-5 sm:px-8 sm:py-7"
      role="region"
      aria-label="Synapgen / Synapgen Relax"
      aria-roledescription="carousel"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setInteracting(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setInteracting(false); }}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
      }}
    >
      <div
        className="relative h-48 w-full touch-pan-y sm:h-64 lg:h-72"
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current !== null && Math.abs(event.changedTouches[0].clientX - touchStart.current) > 45) {
            setActive((index) => (index + 1) % PRODUCTS.length);
            setPlaying(false);
          }
          touchStart.current = null;
        }}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        {PRODUCTS.map((product, index) => (
          <Link
            key={product.name}
            href={product.href}
            aria-hidden={active !== index}
            tabIndex={active === index ? 0 : -1}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 motion-reduce:transition-none ${active === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={product.width}
              height={product.height}
              priority
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 540px, 300px"
              className={`${index === 0 ? "h-full max-w-sm" : "h-[58%] max-w-[240px]"} w-full object-contain drop-shadow-[0_16px_28px_rgba(12,27,20,0.16)]`}
            />
          </Link>
        ))}
      </div>
      <p className="mt-3 text-base font-semibold" aria-live={playing && !interacting && !reducedMotion ? "off" : "polite"}>{PRODUCTS[active].name}</p>
      <div className="mt-1 flex items-center gap-1">
        {PRODUCTS.map((product, index) => (
          <button key={product.name} type="button" aria-label={product.name} aria-pressed={active === index} onClick={() => { setActive(index); setPlaying(false); }} className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-[var(--brand-tint)]">
            <span className={`h-2 w-2 rounded-full ${active === index ? "bg-[var(--brand)]" : "bg-[var(--line-strong)]"}`} />
          </button>
        ))}
        {!reducedMotion && (
          <button type="button" onClick={() => setPlaying((value) => !value)} className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--ink-muted)] hover:bg-[var(--brand-tint)]">
            {playing ? <Pause aria-hidden className="h-3.5 w-3.5" /> : <Play aria-hidden className="h-3.5 w-3.5" />}
            <span className="sr-only"><T fr={playing ? "Mettre en pause" : "Reprendre"} en={playing ? "Pause" : "Play"} /></span>
          </button>
        )}
      </div>
    </div>
  );
}
