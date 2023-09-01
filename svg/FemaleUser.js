import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function FemaleUser(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={60}
      height={60}
      viewBox="0 0 48 48"
      xmlSpace="preserve"
      enableBackground="new 0 0 48 48"
      {...props}
    >
      <Circle cx={24} cy={24} r={20} fill="#A5A0EA70" />
      <Path d="M18 18.25H30V31.75H18z" fill="#bf360c" />
      <Path
        d="M24 44c4.482 0 8.605-1.492 11.94-3.982C35.326 32.641 28 31 28 31h-8s-7.328 1.614-7.94 9.018C15.395 42.508 19.518 44 24 44z"
        fill="#ff1744"
      />
      <Path
        d="M24 34.75c-1.439 0-3.5-3.75-3.5-3.75v-5h7v5s-2.061 3.75-3.5 3.75"
        fill="#ffc67b"
      />
      <Path
        d="M31 23c0 3.728-3.272 7-7 7-3.729 0-7-3.272-7-7v-6c0-3.728 14-5.726 14 0v6zm-7 13c2.901 0 3.5-5 3.5-5s-1.864 3-3.5 3-3.5-3-3.5-3 .599 5 3.5 5"
        fill="#ffe0b2"
      />
      <Path
        d="M26 22a1.001 1.001 0 111 1c-.552 0-1-.449-1-1m-6 0a1.001 1.001 0 101-1c-.552 0-1 .449-1 1"
        fill="#784719"
      />
      <Path
        d="M24 11c-4.556 0-11 2.089-11 17l5 3.75V21l9-5 3 4v12l5-5c0-3.019-.255-14.5-8-14.5L26 11h-2z"
        fill="#ff5722"
      />
    </Svg>
  )
}

export default FemaleUser
