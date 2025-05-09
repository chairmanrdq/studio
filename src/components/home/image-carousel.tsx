"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
    images: { src: string; alt: string; dataAiHint?: string }[];
    interval?: number; // in milliseconds
    className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 5000, className }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (images.length <= 1) return; // No need for interval if only one or no image

        const timer = setInterval(goToNext, interval);
        return () => clearInterval(timer); // Cleanup on unmount
    }, [images.length, interval, goToNext]);

    if (!images || images.length === 0) {
        return (
            <div className={cn("relative w-full h-64 md:h-96 flex items-center justify-center bg-secondary rounded-lg shadow-md", className)}>
                <p className="text-muted-foreground">No images to display.</p>
            </div>
        );
    }

    return (
        <div className={cn("relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-xl group border border-border", className)}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={cn(
                        "absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out",
                        index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    )}
                    aria-hidden={index !== currentImageIndex}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                        data-ai-hint={image.dataAiHint}
                        priority={index === 0} // Prioritize loading the first image
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
            ))}

            {images.length > 1 && (
                <>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-background/50 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full p-2"
                        aria-label="Previous Image"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToNext}
                        className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-background/50 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full p-2"
                        aria-label="Next Image"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={cn(
                                    "h-2 w-2 rounded-full transition-all duration-300",
                                    index === currentImageIndex ? 'bg-primary w-4' : 'bg-background/50 hover:bg-background/80'
                                )}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageCarousel;
