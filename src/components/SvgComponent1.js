import * as React from "react"
const SvgComponent1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="svg-image"
    style={{
      opacity: 1,
    }}
    viewBox="0 0 500 500"
    {...props}
  >
    <image
      width="100%"
      height="100%"
      clipPath="url(#a)"
      href="../assets/images/profile.jpeg"
      preserveAspectRatio="none"
    />
    <defs>
      <linearGradient id="b" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop
          offset="0%"
          style={{
            stopColor: "rgb(4,217,255)",
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "rgb(4,217,255)",
          }}
        />
      </linearGradient>
    </defs>
    <clipPath id="a" />
  </svg>
)
export default SvgComponent1
