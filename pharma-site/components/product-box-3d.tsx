"use client"

import Image from "next/image"

interface ProductBox3DProps {
  className?: string
}

export default function ProductBox3D({ className = "" }: ProductBox3DProps) {
  return (
    <div className={`product-box-container ${className}`}>
      <div className="product-box-wrapper">
        <Image
          src="/synapgen-3d.png"
          alt="Synapgen - Memory and Mental Vitality Supplement by HandSon"
          width={1080}
          height={1080}
          className="product-box-image h-auto w-full object-contain"
          priority
        />
        <div className="product-box-reflection" aria-hidden="true" />
      </div>
    </div>
  )
}
