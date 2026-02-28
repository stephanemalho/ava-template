"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

type YoutubeClickPlayerProps = {
  title: string
  youtubeId: string
  thumbnailSrc: string
  thumbnailAlt?: string
  className?: string
}

export function YoutubeClickPlayer({
  title,
  youtubeId,
  thumbnailSrc,
  thumbnailAlt,
  className,
}: YoutubeClickPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`

  return (
    <div className={className}>
      {isPlaying ? (
        <iframe
          title={title}
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Lancer la video: ${title}`}
        >
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute inset-0 bg-black/35" aria-hidden="true" />
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <Play className="ml-1 h-8 w-8 text-black" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
