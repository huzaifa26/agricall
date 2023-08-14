import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UpArrow(props) {
  return (
    <Svg
      height="30px"
      width="30px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 487 487"
      xmlSpace="preserve"
      {...props}
    >
      <Path d="M397.7 376.1c20.4 20.4 53.6 20.4 74 0s20.4-53.6 0-74L280.5 110.9c-20.4-20.4-53.6-20.4-74 0L15.3 302.1c-20.4 20.4-20.4 53.6 0 74s53.6 20.4 74 0l154.2-154.2 154.2 154.2z" />
    </Svg>
  )
}

export default UpArrow
