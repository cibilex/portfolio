import React, { createElement } from 'react'

function Subtitle({
  icon,
  title,
}: {
  icon: React.ComponentType
  title: string
}) {
  return (
    <h2 className="text-lg/tight font-bold  flex  justify-center pb-1 items-center gap-2 tracking-tight relative text-foreground text-center">
      {createElement(icon)}
      {title}
      <div className="absolute top-full bg-gray-200 w-1/3 h-px left-1/2 -translate-x-1/2"></div>
    </h2>
  )
}

export default Subtitle
