'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PhotoCarouselProps {
  images: string[]
  interval?: number // milliseconds between slides
}

export default function PhotoCarousel({ images, interval = 5000 }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [timerKey, setTimerKey] = useState(0) // Key to force timer reset

  const startTimer = () => {
    if (images.length <= 1) return
    
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    // Start new timer
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, interval, timerKey])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setTimerKey((prev) => prev + 1) // Reset timer by changing key
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setTimerKey((prev) => prev + 1) // Reset timer by changing key
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setTimerKey((prev) => prev + 1) // Reset timer when clicking dots
  }

  if (images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-center px-4">
          Add photos to the public folder and update the photos array in about/page.tsx to display them here.
        </p>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 md:h-[500px] rounded-lg overflow-hidden group">
      {/* Images with smooth fade transition */}
      <div className="relative w-full h-full bg-transparent">
        {images.map((image, index) => {
          const isCurrentPhoto4 = image.includes('photo4') || image.includes('photo4.PNG')
          
          return (
            <img
              key={index}
              src={image}
              alt={`Photo ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              onError={(e) => {
                console.error('Failed to load image:', image)
                e.currentTarget.style.display = 'none'
              }}
            />
          )
        })}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-20"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-2 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
