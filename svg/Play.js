import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Play(props) {
  return (
    <Svg
      height="20px"
      width="20px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 512 512"
      {...props}
    >
      <Path d="M128 96v320l256-160L128 96z" />
    </Svg>
  )
}

export default Play
