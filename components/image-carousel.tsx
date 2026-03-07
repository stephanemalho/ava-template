"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type CarouselSlide = {
  src: string
  alt: string
  caption: string
}

type ImageCarouselProps = {
  slides: CarouselSlide[]
  className?: string
  priorityFirstImage?: boolean
}

export function ImageCarousel({ slides, className, priorityFirstImage = false }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (slides.length === 0) return null

  const previous = () => {
    setCurrentIndex((index) => (index === 0 ? slides.length - 1 : index - 1))
  }

  const next = () => {
    setCurrentIndex((index) => (index === slides.length - 1 ? 0 : index + 1))
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div className="relative overflow-hidden rounded-lg" role="region" aria-label="Galerie d'images">
        <div className="relative h-64 md:h-96">
          {slides.map((slide, index) => (
            <figure key={`${slide.src}-${index}`} className={cn("absolute inset-0", index === currentIndex ? "block" : "hidden")}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={priorityFirstImage && index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <figcaption className="sr-only">{slide.caption}</figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={previous}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
          aria-label="Image precedente"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
          aria-label="Image suivante"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p className="text-sm text-muted-foreground">{slides[currentIndex].caption}</p>
      <div className="flex items-center gap-2" aria-label="Selection de l'image">
        {slides.map((slide, index) => (
          <button
            key={`${slide.caption}-${index}`}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className="flex h-10 w-10 items-center justify-center"
            aria-label={`Afficher l'image ${index + 1}`}
            aria-current={index === currentIndex}
          >
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/40"
              )}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
