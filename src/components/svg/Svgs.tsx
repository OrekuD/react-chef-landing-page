import React from "react";

interface Props {
  size: number;
  color?: string;
}

export const Bag = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 1.1}
    viewBox="0 0 28.527 31.189"
  >
    <g transform="translate(0 0)">
      <path
        d="M20.854,23.493H7.716c-2.979,0-5.031-.686-6.272-2.1C.146,19.922-.271,17.7.169,14.589L1.4,4.887A6.368,6.368,0,0,1,3.292,1.108,4.365,4.365,0,0,1,6.233,0H22.325a4.253,4.253,0,0,1,2.9,1.145,6.851,6.851,0,0,1,1.95,3.742l1.219,9.7c.4,2.854-.079,5.083-1.436,6.625C25.641,22.7,23.532,23.493,20.854,23.493ZM18.836,5.214a1.425,1.425,0,1,0,1.4,1.425A1.415,1.415,0,0,0,18.836,5.214Zm-9.173,0a1.425,1.425,0,1,0,1.4,1.425A1.415,1.415,0,0,0,9.663,5.214Z"
        transform="translate(0 7.696)"
        fill={color}
      />
      <path
        d="M15.756,7.542a.793.793,0,0,1-.069.357h-2.27a1.025,1.025,0,0,1-.069-.357,5.5,5.5,0,0,0-11.007,0,1.025,1.025,0,0,1,0,.357H.016a1.025,1.025,0,0,1,0-.357,7.9,7.9,0,0,1,15.782,0Z"
        transform="translate(6.028)"
        fill={color}
        opacity="0.4"
      />
    </g>
  </svg>
);

export const Search = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 33.264 33.987"
  >
    <g transform="translate(1.5 1.5)">
      <g transform="translate(0 0)">
        <ellipse
          cx="14.2"
          cy="14.2"
          rx="14.2"
          ry="14.2"
          transform="translate(0 0)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <path
          d="M0,0,5.567,5.553"
          transform="translate(24.076 24.813)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </g>
    </g>
  </svg>
);

export const Bell = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 1.17}
    viewBox="0 0 26.858 31.595"
  >
    <g transform="translate(0 0)">
      <path
        d="M0,18.819V18.5A5.914,5.914,0,0,1,.95,15.589a8.07,8.07,0,0,0,1.88-3.722c.071-1.053,0-2.135.071-3.2C3.409,3.539,8.483,0,13.346,0h.141c4.947,0,9.894,3.539,10.431,8.665.1,1.053,0,2.149.085,3.2a7.916,7.916,0,0,0,1.88,3.722,5.593,5.593,0,0,1,.975,2.907v.323a5.778,5.778,0,0,1-1.413,3.82,7.084,7.084,0,0,1-4.509,2.2,59.587,59.587,0,0,1-15.166,0,7.084,7.084,0,0,1-4.452-2.2A5.693,5.693,0,0,1,0,18.819Z"
        transform="translate(0 0)"
        fill={color}
      />
      <path
        d="M6.473.031c-1-.07-1.823,0-2.643,0A10.026,10.026,0,0,0,1.413.284C.735.438,0,.8,0,1.576a2.5,2.5,0,0,0,1.1,1.84,5.879,5.879,0,0,0,4.24,1.166A4.926,4.926,0,0,0,9,2.517,1.4,1.4,0,0,0,8.763.565h0A5.257,5.257,0,0,0,6.473.031Z"
        transform="translate(8.794 26.975)"
        fill={color}
        opacity="0.4"
      />
    </g>
  </svg>
);

export const Logo = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.34}
    viewBox="0 0 156.298 53.615"
  >
    <g transform="translate(-383.096 -44)">
      <path
        d="M943.944,2120.976a2.872,2.872,0,0,1-2.388,1.239c-1.481,0-3.083-1.239-5.894-1.239-7.919,0-14.357,7.1-14.357,17.984,0,9.884,5.41,16.563,13,16.563,5.562,0,9.7-4.05,10.518-10.367l-.333-.09c-1.451,4.654-3.9,6.045-6.529,6.045-4.473,0-7.405-5.32-7.405-14.448,0-8.07,1.844-14.629,5.834-14.629,3.355,0,5.682,5.017,7.707,10.942h.151Zm56.31,3.385v6.922h3.446l-.242,1.209h-3.2v17.591c0,3.234.453,3.9,1.965,4.867v.091H990.974v-.091c1.36-1.028,1.481-1.783,1.481-4.867v-17.591h-2.3v-.484l2.3-1.058v-1.813a11.032,11.032,0,0,1,1.814-6.347c.484-.362,2.448-.06,3.143.121a46.376,46.376,0,0,0-15.2-3.869c-8.765-.7-13.511,3.657-17.561,9.279l-4.745-2.357c5.259-7.315,13.329-8.251,22.367-7.526a47.8,47.8,0,0,1,13.178,2.992,10.332,10.332,0,0,1,7.254-2.66c3.446,0,6.377,1.542,6.377,4.685,0,3.295-2.237,4.172-4.927,3.083a30.276,30.276,0,0,1-3.9-2.176Zm0-.7,2.72,1.511c.816-.423,1.239-1.27,1.239-3.023,0-1.662-.514-2.63-1.723-2.63-1.511,0-2.207,1.693-2.237,4.141Zm-54.375-4.564v.091c1.451,1.118,1.662,1.814,1.662,5.229v25.571c0,3.174-.121,3.929-1.481,4.957v.091h10.76v-.091c-1.3-1.028-1.481-1.783-1.481-4.957V2139.5c0-3.174,1.149-4.775,2.569-4.775,1.451,0,1.964,1.118,1.964,2.75v12.513c0,3.174-.121,3.929-1.481,4.957v.091h10.76v-.091c-1.3-1.028-1.481-1.783-1.481-4.957V2137.57c0-4.02-1.874-6.77-5.924-6.77-3.113,0-5.5,1.965-6.408,5.561V2119.1Zm34.789,11.7c-5.471,0-10.458,4.9-10.458,12.392,0,7.829,4.685,12.332,10.216,12.332,5.41,0,8.433-3.657,9.158-9.037l-.332-.03c-1.118,3.626-3.2,4.987-5.531,4.987-3.476,0-5.592-3.415-5.592-9.37h11.546c0-6.377-2.811-11.274-9.007-11.274Zm-2.509,10.276c.091-5.41.816-9.461,2.509-9.461,1.783,0,1.965,4.141,1.965,9.461Z"
        transform="translate(-469.685 -2066.235)"
        fill="#f24f04"
      />
      <g transform="translate(0 0.143)">
        <path
          d="M1370.517,968.23c-6.5,1.662-9.4,13.873.7,16.14-2.055-1.814-3.2-4.594-2.6-6.589a10.107,10.107,0,0,0,5.8,5.2,19.926,19.926,0,0,1,11.848-8.735c-4.413-.272-8.917.151-12.725,3.2a45.117,45.117,0,0,1,4.927-1.209,23.061,23.061,0,0,0-2.75,2.146c-1.783,1.632-4.624.665-5.592-1.27-1.3-2.63-1.844-6.015.393-8.886Zm7.345,12.695c7.466-1.813,21.793-6.68,21.793-6.68-9.158,1-15.385,3.567-21.793,6.68Zm20.7-8.13a13.563,13.563,0,0,0,10.276-5.531c-.03,3.627-4.987,7.526-10.276,5.531Zm13.964-4.655a8.559,8.559,0,0,1-.212,6.106,11.985,11.985,0,0,1-2.9.755,8.009,8.009,0,0,0,3.113-6.861Zm-5.682,11c-1.058-.212-2.63-.393-3.143-.453,0,0,.091-1.028.181-2.841a21.57,21.57,0,0,0,2.781.967Zm-16.775,4.262a45.787,45.787,0,0,1,13.088.091c-.061.242-.121.695-.212,1.148a21.778,21.778,0,0,1,4.352.514l-.181-2.267c-4.08-1.058-10.972-.876-17.047.514Z"
          transform="translate(-974.958 -913.38)"
          fill="#c6d9de"
          fillRule="evenodd"
        />
        <path
          d="M1236.932,728.038c2.9-1.874,7.042-3.869,12.574,1.028,7.345-5.834,12.483-4.383,13.934-.574,1.36,3.506-1.572,9.037-8.7,10.1a8.011,8.011,0,0,0,3.113-6.861c-2.66,5.078-8.917,6.287-11.123,6.378a17.838,17.838,0,0,0,5.259,2.3l.242,3.053c-4.715-1.33-13.178.725-16.835,3.536,6.075-1.39,12.967-1.572,17.047-.514l.181,2.267c-5.924-1.36-18.286-.3-27.475,4.836,13.632-3.446,25.9-1.239,31.888.03-.272-4.594-.876-10.518-1.088-12.634,5.108.181,10-1.934,11.7-7.133,1.783-5.41-.876-11.818-7.163-12.906-3.174-.544-6.982.907-11.486,3.839-4.836-3.083-11.455-.242-12.06,3.264Zm-13.753,16.473c2.267-4.2,13.39-8.977,21.792-6.68-9.158,1-15.385,3.567-21.792,6.68Zm2.932,2.388Zm-.3.121a10.759,10.759,0,0,1-11.878-5.652c-.6,1.995.544,4.776,2.6,6.589-4.564-.816-8.161-3.808-7.284-9.733,1.814-12.392,17.742-6.831,26.659-6.287,4.383.272,7.557-.484,8.977-2.781-7.042,4.081-20.13-4.957-31.646-2.69-9.4,1.844-13.148,14.931-6.5,21.52,6.045,5.954,18.1,6.226,22.125-2.63a13.456,13.456,0,0,1-2.75,1.541Z"
          transform="translate(-820.276 -676.966)"
          fill="#232122"
          fillRule="evenodd"
        />
        <path
          d="M1462.533,1718.1c-2.146,0-7.133-.6-14.236,7.556-5.32,5.29-9.158,2.63-8.886.091a1.413,1.413,0,0,1,1.088-1.239,1.03,1.03,0,0,0-.212.665,1.051,1.051,0,0,0,1.058,1.058,1.111,1.111,0,0,0,1.058-1.058c.03-.725-.665-1.451-1.814-1.481-2.69-.03-3.869,2.63-2.539,4.9,2.237,3.778,9.551,2.932,12.634.151a8.7,8.7,0,0,1-1.239,1.693c.272-.061.574-.151.846-.212,5.38-1.36,10.1-3.718,12.241-5.712,2.116,1.995,6.831,4.352,12.211,5.712.272.061.574.151.846.212a8.7,8.7,0,0,1-1.239-1.693c3.083,2.781,10.4,3.627,12.634-.151,1.33-2.267.151-4.927-2.539-4.9-1.149.03-1.844.756-1.814,1.481a1.111,1.111,0,0,0,1.058,1.058,1.078,1.078,0,0,0,1.088-1.058,1.056,1.056,0,0,0-.242-.665,1.484,1.484,0,0,1,1.118,1.239c.242,2.539-3.6,5.2-8.916-.091-7.1-8.161-12.09-7.556-14.206-7.556Z"
          transform="translate(-1044.88 -1633.66)"
          fill="#232122"
          fillRule="evenodd"
        />
        <path
          d="M2178.227,1534.1a2.62,2.62,0,0,1,.967.181,1.4,1.4,0,0,0-.151.635,1.161,1.161,0,0,0,1.179,1.179,1.115,1.115,0,0,0,.695-.212,3.489,3.489,0,0,1,.212,1.118,2.9,2.9,0,1,1-2.9-2.9Z"
          transform="translate(-1752.685 -1457.153)"
          fill="#232122"
          fillRule="evenodd"
        />
        <path
          d="M1829.383,1593.53a2.5,2.5,0,0,1,2.509,2.388H1826.9a2.472,2.472,0,0,1,2.479-2.388Z"
          transform="translate(-1418.44 -1514.167)"
          fill="#232122"
          fillRule="evenodd"
        />
      </g>
    </g>
  </svg>
);

export const Menu = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.94}
    viewBox="0 0 30.079 28.31"
  >
    <path
      d="M1.769,0A1.769,1.769,0,0,0,0,1.769V28.31a1.769,1.769,0,0,0,3.539,0V1.769A1.769,1.769,0,0,0,1.769,0Z"
      transform="translate(0 15.924) rotate(-90)"
      fill={color}
    />
    <path
      d="M1.769,0A1.769,1.769,0,0,0,0,1.769V14.155a1.769,1.769,0,0,0,3.539,0V1.769A1.769,1.769,0,0,0,1.769,0Z"
      transform="translate(14.155 3.539) rotate(-90)"
      fill={color}
    />
    <path
      d="M1.769,0A1.769,1.769,0,0,0,0,1.769V14.155a1.769,1.769,0,0,0,3.539,0V1.769A1.769,1.769,0,0,0,1.769,0Z"
      transform="translate(0 28.31) rotate(-90)"
      fill={color}
    />
  </svg>
);

export const ChevronRight = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 2}
    viewBox="0 0 14.2 28.224"
  >
    <path
      d="M11.013,33.191a2.011,2.011,0,0,1-1.549-3.3L18.476,19.11l-8.69-10.8a2.056,2.056,0,1,1,3.239-2.534L22.74,17.843a2.012,2.012,0,0,1,0,2.555L12.683,32.467A2.012,2.012,0,0,1,11.013,33.191Z"
      transform="translate(-8.998 -4.971)"
      fill={color}
    />
  </svg>
);

export const Play = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 1.2}
    viewBox="0 0 25.405 30.959"
  >
    <path
      d="M8,8.326V34.27a2.5,2.5,0,0,0,3.857,2.1L32.241,23.4a2.5,2.5,0,0,0,0-4.232L11.857,6.223A2.5,2.5,0,0,0,8,8.326Z"
      transform="translate(-8 -5.819)"
      fill={color}
    />
  </svg>
);

export const Star = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19.957 19.009"
  >
    <path
      d="M17.56,21a1,1,0,0,1-.46-.11L12,18.22,6.9,20.89a1,1,0,0,1-1.45-1.06l1-5.63-4.12-4a.985.985,0,0,1,.56-1.68l5.7-.83L11.1,2.56a1,1,0,0,1,1.8,0l2.54,5.12,5.7.83a.985.985,0,0,1,.56,1.68l-4.12,4,1,5.63A.99.99,0,0,1,17.56,21Z"
      transform="translate(-2.036 -1.996)"
      fill={color}
    />
  </svg>
);
