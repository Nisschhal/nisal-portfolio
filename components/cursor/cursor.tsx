import AnimatedCursor from "react-animated-cursor"

interface CursorProps {
  color: string
}

export default function Cursor({ color }: CursorProps) {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={0} // when hover inner dot scale
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: color,
      }}
      outerStyle={{
        border: `3px solid ${color}`,
      }}
      clickables={["a", "select", "button", "input", ".link", "textarea"]}
    />
  )
}
