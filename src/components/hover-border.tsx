function HoverBorder() {
  return (
    <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 animate-rotate-gradient"></div>
  )
}

export default HoverBorder
