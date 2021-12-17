import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import PropTypes from 'prop-types';

const xml = (color) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="502" height="376" fill="none">
    <path stroke="${color}" stroke-width="3.48742" d="m507.515 129.194 2.325-15.113 23.831-2.324c12.089-1.86 15.112-5.038 15.112-6.394 5.115-6.9748.194-20.3434-2.906-26.1559-9.765-6.5098-29.643-6.1998-38.362-5.2311-6.974.465-17.63 30.031-22.087 44.755l6.394 17.437 10.462-2.325 5.231-4.649Z"/>
    <path stroke="${color}" stroke-width="3.48742" d="M540.062 15.8519c-16.274-.9688-61.378 18.4833-111.597 104.0411l58.705-8.718M283.739 28.6399C347.907 8.64537 453.847 10.6216 498.796 14.109c-19.064 4.185-80.017 60.6423-108.11 88.348-83.233-6.975-205.951.194-256.906 4.65l149.959-78.4671ZM39.036 239.047l99.973 6.975v33.712l-99.973-6.975v-33.712ZM405.799 373.894l-47.08-3.487c-4.263-1.55-14.88-9.997-23.25-31.387"/>
    <path stroke="${color}" stroke-width="3.48742" d="M526.694 4.80894C470.314.546531 341.396-1.11968 276.762 26.3147c-45.53 25.3806-137.52 76.3743-141.24 77.3043-3.72.93-57.7364 24.412-84.2796 36.037l-31.968 13.949-16.27465 59.868 7.55605 107.529c73.6234 13.756 243.4222 36.269 333.6302 16.274 9.493-45.917 37.548-138.567 73.817-141.822 23.443-3.293 64.866 12.206 43.011 100.554l87.767-22.087"/>
    <path stroke="${color}" stroke-width="3.48742" d="M367.702 290.015c-1.964 22.05 1.389 42.383 8.31 57.418 6.945 15.085 17.291 24.497 29.175 25.555 11.884 1.059 23.731-6.376 33.233-19.996 9.469-13.574 16.364-32.995 18.328-55.044 1.964-22.05-1.389-42.383-8.31-57.418-6.944-15.085-17.29-24.496-29.175-25.555-11.884-1.059-23.731 6.376-33.232 19.996-9.47 13.574-16.365 32.995-18.329 55.044ZM272.696 153.605l112.76-25.574-49.406 65.099-115.666 15.693 8.138-22.668 44.174-32.55Z"/>
  </svg>
`;

export default function AbstractFrontLeft({ color, ...props }) { return (<SvgXml xml={xml(color)} height="100%" {...props} />); }

AbstractFrontLeft.propTypes = {
  color: PropTypes.string,
};
AbstractFrontLeft.defaultProps = {
  color: '#fff',
};
