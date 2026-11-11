"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryImage {
  src: string;
  caption: string;
  aspectClass?: string;
  spanClass?: string;
  fitClass?: string;
  objectPosition?: string;
}

interface ImageLightboxProps {
  images: GalleryImage[];
}

export function ImageLightbox({ images }: ImageLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev! + 1) % images.length));
  }, [selectedIndex, images.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Thumbnails Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className={`group relative cursor-pointer rounded-xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-brand-teal transition-all bg-white ${item.spanClass || ""}`}
          >
            <div
              className={`relative ${item.aspectClass || "aspect-[16/10]"} w-full ${
                item.fitClass === "object-contain" ? "bg-slate-50" : "bg-slate-900"
              } overflow-hidden`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className={`${item.fitClass || "object-cover"} ${item.objectPosition || "object-top"} group-hover:scale-[1.03] transition-transform duration-300`}
              />
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold rounded-lg shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to Expand</span>
                </span>
              </div>
            </div>
            <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-xs font-medium text-slate-700 flex items-center justify-between">
              <span className="line-clamp-1">{item.caption}</span>
              <span className="text-[10px] text-slate-400 font-mono ml-2 flex-shrink-0">
                {idx + 1} / {images.length}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs font-mono tracking-wider text-teal-400">
              Screenshot {selectedIndex + 1} of {images.length}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Container with Prev/Next buttons */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 && (
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="relative max-w-6xl w-full h-[75vh] flex items-center justify-center">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].caption}
                fill
                className="object-contain"
                priority
              />
            </div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Caption Footer */}
          <div
            className="pt-3 border-t border-white/10 text-center text-slate-300 text-xs sm:text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            {images[selectedIndex].caption}
          </div>
        </div>
      )}
    </>
  );
}
