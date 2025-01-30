import React from 'react'

export default function Button({bg, text, color, className, rounded='lg'}) {
  return (
    <div className={`${bg} ${color} p-2 rounded-${rounded} ${className} cursor-pointer px-6 max-sm:text-sm py-2`}>
      {text}
    </div>
  )
}
