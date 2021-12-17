import * as React from 'react';
import PropTypes from 'prop-types';

export default function AbstractInteriorRear({ color, ...props }) {
  return (
    <svg width="502" height="380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M94.564 126.852c-13.397-.243-41.029 1.206-42.92 8.917" stroke={color} strokeWidth="3.058" />
      <path d="M81.646 109.572c-4.97 4.911-15.785 15.75-19.277 19.824M92.748 100.298c-1.577 1.212-4.874 3.965-5.457 5.274M142.034 148.857h39.646M203.683 102.482l-3.455 29.644M127.666 78.475c19.762-4.607 61.252-12.804 69.108-8.73l4.183 4.001M154.76 243.427l-20.733 10.73c6.911 6.365 19.787 21.715 16.004 32.19-1.576 5.335-6.62 17.277-14.185 22.37 2.424 6.183 6.365 21.46 2.727 33.099" stroke={color} strokeWidth="3.058" />
      <path d="m118.386 239.788 36.373 4.001c9.094 5.88 24.734 20.441 14.55 31.644v31.099l-16.005 11.094-1.273 17.641M431.013 5c2.728 0 9.857 4.801 16.55 24.006 10.002 34.373 28.989 114.285 24.915 158.951.485 16.913-5.638 57.251-34.009 83.294l-95.297 108.392M153.305 360.91c1.576-2.97 7.747-7.857 19.823-3.637l55.287 21.642" stroke={color} strokeWidth="3.058" />
      <path d="M239.146 271.796c2.182-1.334 9.056-3.201 19.095 0l103.664 36.009M219.143 300.348c2.728-1.091 11.603-1.855 25.279 3.819l120.031 43.466M461.386 112.117c-8.547 12.852-23.351 42.084-14.185 56.196 1.212 2.425 5.747 7.566 14.185 8.73 2.243-1.334 6.948-4.474 7.821-6.365" stroke={color} strokeWidth="3.058" />
      <path d="M460.477 112.117c-6.729.788-20.66 5.638-22.552 18.732l-7.092 20.733c-.303 3.395-.11 10.803 3.091 13.276M364.268 347.817c-4.728-7.76-9.602-28.88 8.73-51.286l73.837-127.67" stroke={color} strokeWidth="3.058" />
      <path d="M361.722 273.616c16.61-30.735 53.141-94.388 66.381-103.117 2.243-4.062 9.129-10.258 18.732-2.547M149.122 377.643c-.969-8.184 5.929-31.245 41.284-58.015l44.557-29.826M97.108 126.487c-5.517 2.606-19.57 14.221-27.28 38.373L36.183 275.798" stroke={color} strokeWidth="3.058" />
      <path d="M46.915 173.954c5.032-15.459 22.733-46.631 53.287-47.649 12.852-1.758 31.826-1.273 39.828 16.368 2.304 3.455 4.802 16.731-3.637 42.193L97.656 301.623c1.879 1.94 4.51 6.656 0 10.003l-65.472 40.01M81.647 100.117v27.098m5.456-27.098v26.916m25.461-28.189v27.098m4.91-28.37v28.37M202.406 130.851c9.882-5.456 28.626-10.076 24.552 15.095L171.489 259.43M89.656 88.658v-51.65c11.822 1.637 35.937 7.857 37.828 19.642v33.827" stroke={color} strokeWidth="3.058" />
      <path d="m89.103 88.658-28.189 8.911c2.619 2.474 30.311 2.85 43.83 2.728 20.805-3.2 23.945-8.123 22.915-10.184l-38.556-1.455ZM235.326 104.214v18.089m4.91-18.914v18.914M222.962 105.209v17.095m5.093-17.353v17.353M236.234 98.66l14.004 2.729M228.235 55.921c6.79 4.062 20.696 13.313 22.006 17.823.848 8.002 2.037 24.734 0 27.644-7.942 2.182-27.68 5.71-40.193 3.091" stroke={color} strokeWidth="3.058" />
      <path d="M223.327 102.296c-17.604 5.674-22.854-1.273-23.279-5.456-1.745-9.457.122-21.4 1.274-26.189 2.799-11.639 8.79-15.215 12.548-16.367 13.386-4.947 20.49 7.274 22.37 14.003V98.66l-12.913 3.637ZM131.85 239.787c13.882-30.372 44.702-92.352 56.924-97.298 5.819-6.608 21.314-19.896 36.736-20.187h18.551c4.243.242 10.839 8.802 3.273 41.101l-41.647 94.934c2.182 1.213 5.238 4.583 0 8.366l-34.009 24.006M118.387 7.365c-12.306 1.152-38.119 11.785-42.92 45.103C64.19 66.229 38.912 151.075 28 380.372M234.786 289.253v-11.639c4.183-6.426 15.64-20.442 28.007-25.098l13.458-5.092c26.371 6.426 80.348 20.696 85.295 26.371 5.456 1.697 13.094 11.021 0 34.736" stroke={color} strokeWidth="3.058" />
      <path d="M245.328 67.744c.121-1.455 1.819-4.328 7.638-4.183 45.77 0 140.11 1.31 151.313 6.547 4.061 19.52 10.802 61.434 5.274 72.928H251.148" stroke={color} strokeWidth="3.058" />
    </svg>
  );
}
AbstractInteriorRear.propTypes = {
  color: PropTypes.string,
};
AbstractInteriorRear.defaultProps = {
  color: '#fff',
};
