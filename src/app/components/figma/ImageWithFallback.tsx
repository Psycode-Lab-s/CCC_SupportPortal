import React, { useState } from 'react'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const { src, alt, style, className, ...rest } = props

  if (didError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className ?? ''}`}
        style={style}
      >
        <span className="text-gray-400 text-sm">Image not available</span>
      </div>
    )
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={() => setDidError(true)} 
    />
  )
}
