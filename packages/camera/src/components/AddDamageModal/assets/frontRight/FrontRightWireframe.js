import PropTypes from 'prop-types';
import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const FRONT_RIGHT_WIREFRAME_WIDTH = 320;
export const FRONT_RIGHT_WIREFRAME_HEIGHT = 220;

export default function FrontRightWireframe({ top, left }) {
  return (
    <View style={[{ position: 'absolute', left, top }]}>
      <Svg
        width={FRONT_RIGHT_WIREFRAME_WIDTH}
        height={FRONT_RIGHT_WIREFRAME_HEIGHT}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 323 220"
        preserveAspectRatio="xMidYMid slice"
        pointerEvents="box-none"
      >
        <Path
          d="M10.977 70.105c5.159 5.37 11.074 22.441 13.895 27.948 2.75 5.576 5.365 9.293 7.36 11.496 1.994 2.203 70.503 53.005 68.371 49.425-2.201-3.58-8.53-22.785 0-35.314 8.529-12.528 30.54 3.787 44.434 22.992 15.614 21.615 20.498 44.538 24.212 58.305 2.407 4.337 27.789 16.797 58.26 13.492 35.974-3.923 62.662-30.013 73.186-44.95 1.238-1.721 3.027-5.025 5.09-10.051 0 0 .207-.619 0-.688M48.257 4.09C30.098 6.36 19.918 10.767 16.686 14.484 10.908 21.23 3.892 36.374 1.69 41.881"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          d="M16.685 14.484C10.907 21.23 3.891 36.374 1.69 41.881-.51 47.388 2.997 74.992 6.024 79.535c.206-.137-1.17-5.3-1.583-9.43-.068-4.888 3.99-2.685 6.535 0"
          stroke="#fff"
          strokeOpacity={0.2}
          strokeMiterlimit={10}
        />
        <Path
          d="M63.458 2.851c5.228-.207 11.831-.482 17.953-.344 26.757.826 52.276.688 72.705 5.851 20.428 5.163 52.551 33.661 61.493 39.237 5.158 2.96 51.312 16.865 60.048 20.445 8.667 3.648 31.916 13.767 45.672 38.342 1.858 3.717-4.058 23.267-10.042 40.476M263.138 139.699c.344 1.789-4.54 4.543-9.905 5.369-5.365.826-58.672.688-83.435-12.666-10.73-9.981-22.63-28.567-20.016-32.147 2.545-3.58 70.366 9.981 93.753 23.818 4.058 2.615 18.434 12.046 19.603 15.626Z"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          d="M321.673 107.208c-6.534 27.122-32.466 34.625-42.096 41.44-1.719 1.239-18.434 12.666-20.635 17.416.619 4.75 11.349 13.079 19.328 12.115 2.064-.068 5.572-1.858 9.63-4.887M78.935 64.116l6.328 1.996s0 2.478-1.513 3.236c-1.513.826-4.402.619-7.085.963-2.682.275-17.952 1.652-23.18-.62-5.159-2.34-8.736-8.673-8.323-10.67.344-3.51 8.667-7.64 21.942-7.984 6.672.482 11.969 7.572 11.9 9.912.069.826-.069 2.96-.069 3.167ZM42.617 68.66l4.609 2.064s1.788 1.17 1.926 1.721c.137.55.206 2.41 0 2.547-.207.138-10.524-3.58-11.075-4.543-.48-.964-.687-1.927-.137-2.134.482-.207 2.476-.895 2.958-.688.55.206 1.72 1.032 1.72 1.032ZM13.177 52.965l3.095 1.652s1.032.482 1.17 1.17c.206.688.206 1.72-.276 1.996-.481.344-6.534-2.41-6.74-3.235-.276-.895-.207-1.583.343-1.583.482.068 1.995-.207 2.408 0Z"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          d="M2.998 38.783c.344 1.928.55 4.268.481 5.783-.137 1.858-1.994 10.532-2.132 11.014"
          stroke="#fff"
          strokeOpacity={0.2}
          strokeMiterlimit={10}
        />
        <Path
          d="M168.491 202.41c-1.238 1.239-16.783 12.804-19.053 13.01-10.593.826-18.296-3.648-25.656-11.633-14.858-16.177-19.741-31.39-20.979-38.756-1.239-7.365-2.683-21.615.687-27.741 4.403-8.123 10.112-11.909 17.609-13.768"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          d="M37.733 113.885c-.481 1.721-1.1 1.997-1.857 2.41-.757.413-10.524 3.166-12.312 3.304-1.789.137-6.466-3.373-10.18-11.909-1.995-4.612-5.985-16.452-7.016-26.433-.413-3.993-.688-6.196 1.926-7.917 1.513-1.032 3.095-1.583 3.92-1.79"
          stroke="#fff"
          strokeOpacity={0.2}
          strokeMiterlimit={10}
        />
        <Path
          d="M164.158 12.212c-1.857-2.134-7.497-4.956-9.836-5.576-4.608-1.17-23.111-3.029-28.339-2.478M26.935 8.77s-.481-.137 1.72-2.202c2.2-1.997 22.905-7.572 31.915-4.819 9.355 3.167 11.556 9.018 13 11.29l-4.126.688s-4.678-5.438-7.842-6.746C58.438 5.74 50.872 3.745 48.19 4.09M306.265 87.245c2.614 12.735-43.127 31.528-62.731 36.828"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          d="M165.327 13.727c9.974 4.75 52.895 36.552 52.62 39.443-.275 2.892-85.43 22.372-106.065 14.456-20.016-10.6-29.37-34.9-42.44-53.693 7.636-2.203 73.875-7.778 95.885-.206ZM149.989 100.048c-6.879-2.89-35.08-13.148-40.583-19.068-2.064-8.535-2.201-12.528 2.476-13.354M78.798 64.322c-.138.826-.825 1.652-2.683 1.583-1.857-.069-27.17-.275-28.407-1.101M201.439 167.647c-1.857-.482-8.391-1.102-9.836.895-2.614 4.474 5.09 24.712 7.429 26.777 3.026.413 10.18-17.415 2.407-27.672ZM288.383 171.502l-2.545 12.529s17.127-12.942 23.249-27.398c.894-2.547 2.751-11.289 2.751-11.289s-6.053 14.8-23.455 26.158ZM77.834 70.31c6.603 2.96 11.624 5.232 13.55 6.127"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          d="M92.76 154.155c-1.238-8.88-9.217-51.422-1.376-77.718C92.76 70.93 70.543 22.883 61.12 14.76c-10.386-8.88-25.862-6.264-34.254-2.616-7.016 3.58-11.005 8.95-13.963 16.797-.413 2.203 1.032 8.398 7.016 12.322 6.672 4.336 16.714 9.568 27.1 14.662"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          d="M46.263 8.977c-4.54 9.087-5.984 29.531-5.503 43.987-9.01 6.677-1.1 34.625 7.223 68.631M27.485 12.006c-3.646 4.956-9.63 21.27-10.8 26.57 0 0-11.418 13.837-7.153 30.152"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          d="m171.799 133.9-21.586 19.36M91.932 75.818l17.268-7.53M69.266 13.434l-5.396 3.227M26.11 100.993l65.828 45.757"
          stroke="#fff"
        />
      </Svg>
    </View>
  );
}

FrontRightWireframe.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
};

FrontRightWireframe.defaultProps = {
  left: 0,
  top: 0,
};
