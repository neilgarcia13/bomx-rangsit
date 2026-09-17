"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  productName: string;
  images: string[];
};

const ProductGallery = ({ productName, images }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex] ?? images[0];

  if (!selectedImage) {
    return (
      <div className="border-border bg-muted relative isolate grid aspect-square place-items-center overflow-hidden rounded-xl border">
        <div className="bg-primary absolute -top-16 -right-16 size-56 rotate-12 rounded-3xl opacity-90" />
        <div className="bg-secondary absolute -bottom-14 -left-14 size-40 rounded-full" />
        <div className="relative text-center">
          <ImageIcon aria-hidden="true" className="text-muted-foreground mx-auto size-9" />
          <p className="text-muted-foreground mt-3 text-sm">Product image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-3 lg:grid lg:grid-cols-[5rem_minmax(0,1fr)] lg:items-start">
      <div className="border-border bg-muted relative order-1 aspect-square overflow-hidden rounded-xl border lg:order-2">
        <Image
          fill
          priority={selectedIndex === 0}
          src={selectedImage}
          alt={`${productName}, image ${selectedIndex + 1} of ${images.length}`}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <div
          className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible lg:pb-0"
          aria-label={`${productName} image gallery`}
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`View image ${index + 1} of ${images.length} for ${productName}`}
              aria-pressed={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "border-border bg-muted focus-visible:ring-ring focus-visible:ring-offset-background relative size-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                selectedIndex === index && "border-foreground ring-foreground ring-1",
              )}
            >
              <Image fill src={image} alt="Product image" sizes="80px" className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
