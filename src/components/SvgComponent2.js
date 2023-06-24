import * as React from "react"
const SvgComponent2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="svg-image-background"
    filter="blur(20px)"
    style={{
      opacity: 1,
    }}
    viewBox="0 0 500 500"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop
          offset="0%"
          style={{
            stopColor: "#04d9ff",
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#04d9ff",
          }}
        />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent2
