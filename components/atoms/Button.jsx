import React from 'react'

export const Button = ({bg, text, color, className, rounded='lg'}) => {
  return (
    <div className={`${bg} ${color} p-2 rounded-${rounded} ${className} cursor-pointer px-6 max-sm:text-sm py-2`}>
      {text}
    </div>
  )
}

export const LinkButton = ({bg, text, color, className, rounded='lg', href}) => { 
  return (
    <a to={href} className={`${bg} ${color} p-2 rounded-${rounded} ${className} cursor-pointer px-6 max-sm:text-sm py-2`}>
      {text}
    </a>
  )
}
