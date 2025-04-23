'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Tile {
    id: number
    name: string
    image: string
    description?: string
}

export function TileDisplay({ tiles }: { tiles: Tile[] }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true
        startX.current = e.pageX - (containerRef.current?.offsetLeft || 0)
        scrollLeft.current = containerRef.current?.scrollLeft || 0
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return
        e.preventDefault()
        const x = e.pageX - (containerRef.current.offsetLeft || 0)
        const walk = x - startX.current
        containerRef.current.scrollLeft = scrollLeft.current - walk
    }

    const handleMouseUpOrLeave = () => {
        isDragging.current = false
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-full p-16 mx-auto flex overflow-x-auto space-x-4 scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
        >
            {tiles.map((tile, index) => (
                <div
                    key={tile.id}
                    className={cn(
                        'relative aspect-square w-48 transition-all duration-300',
                        'hover:z-10',
                        hoveredIndex !== null && hoveredIndex !== index && 'opacity-50',
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="relative size-48 transform transition-transform duration-300 hover:scale-105 rotate-45">
                        <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image src={tile.image} alt={tile.name} fill className="object-cover" />
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
