"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export function LocalVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [opened, setOpened] = useState(false)

  function openVideo() {
    const video = videoRef.current
    if (!video) return
    video.src = "/videos/ava-captions-stream-v4.mp4"
    video.muted = false
    video.volume = 1
    setOpened(true)
    void video.play().catch(() => {
      // Native controls remain available if the browser blocks playback.
    })
  }

  return (
    <div className="mx-auto w-full max-w-sm space-y-3">
      <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">
        <video
          ref={videoRef}
          controls={opened}
          playsInline
          preload="none"
          poster="/ava-captions-5cb2f0-poster.jpg"
          aria-label="Présentation des séjours AVA Bien-Être"
          className="absolute inset-0 h-full w-full object-contain"
        />
        {!opened && (
          <button
            type="button"
            onClick={openVideo}
            aria-label="Lire la vidéo AVA Bien-Être"
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src="/ava-captions-5cb2f0-poster.jpg"
              alt="Aperçu de la vidéo AVA Bien-Être"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20" aria-hidden="true">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                <Play className="ml-1 h-8 w-8 text-black" />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="text-center text-sm">
        <a
          href="/videos/ava-captions-stream-v4.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4"
        >
          Ouvrir la vidéo directement
        </a>
      </p>
    </div>
  )
}
