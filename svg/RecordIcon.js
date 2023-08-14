import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function RecordIcon(props) {
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 256 256"
    {...props}
  >
    <G
      stroke="none"
      strokeWidth={0}
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      fill="none"
      fillRule="nonzero"
      opacity={1}
    >
      <Path
        d="M45 70.968c-16.013 0-29.042-13.028-29.042-29.042a3.099 3.099 0 016.198 0C22.157 54.522 32.404 64.77 45 64.77c12.595 0 22.843-10.248 22.843-22.843a3.098 3.098 0 116.198 0C74.042 57.94 61.013 70.968 45 70.968z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="#000"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        d="M45 60.738c-10.285 0-18.7-8.415-18.7-18.7V18.7C26.3 8.415 34.715 0 45 0s18.7 8.415 18.7 18.7v23.337c0 10.285-8.415 18.701-18.7 18.701zM45 89.213a3.098 3.098 0 01-3.099-3.099V68.655a3.099 3.099 0 016.198 0v17.459A3.098 3.098 0 0145 89.213z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="#000"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        d="M55.451 90H34.549a3.098 3.098 0 110-6.198H55.45A3.098 3.098 0 1155.451 90z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="#000"
        fillRule="nonzero"
        opacity={1}
      />
    </G>
  </Svg>
)
}

export default RecordIcon
